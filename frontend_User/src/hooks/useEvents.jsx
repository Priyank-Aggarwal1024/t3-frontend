import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchEvents = async () => {
  const url = "/api/products";
  const response = await axios.get(url);
console.log(response.data.products);
  // Replace http with https in image URLs
  const events = response.data.products
    // .filter((event) => event.status !== " ")
    .map((event) => {
      // Check if image is an array and map over it
      // if (Array.isArray(event.image)) {
      //   event.image = event.image.map((imageUrl) => 
      //     imageUrl && imageUrl.startsWith("http:") ? imageUrl.replace("http:", "https:") : imageUrl
      //   );
      // }

      // Check if image is a string before calling startsWith
      if (typeof event.image === 'string') {
        event.image = event.image.startsWith("http:") ? event.image.replace("http:", "https:") : event.image;
      }

      return event;
    });

    console.log(events);


  return events;
};


const useEvents = () => {
  const {
    data: events,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["events"],
    queryFn: fetchEvents,
    refetchInterval: 2 * 60 * 1000, // 2 minutes(data will be refetched every 2 minutes)
  });

  if (error) {
    console.error("Error fetching listings:", error);
  }

  return [events, isLoading];
};

export default useEvents;
