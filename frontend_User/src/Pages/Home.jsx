import React, { useEffect, useState, useMemo, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import EventCard from "../components/EventCard";
import Banner from "../components/Banner";
import useEvents from "../hooks/useEvents";
import toast from "react-hot-toast";

import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
} from "../redux/user/userSlice";
import Loader from "../components/Loader";
import { IoIosArrowDown } from "react-icons/io";
import { ScrollRestoration } from "react-router-dom";
import CategorySection from '../components/CategorySection'
import AboutSection from "../components/AboutSection";
import CollectionSection from "../components/CollectionSection";

const Home = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [formData, setFormData] = useState(currentUser);
  const [showModal, setShowModal] = useState(false);
  const [events, loading] = useEvents();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const city = useSelector((state) => state.user.city);
  const state = useSelector((state) => state.user.state);
  const [products, setProducts] = useState([]);

  // State for managing the number of events shown on mobile
  const [eventsToShow, setEventsToShow] = useState(5); // Initial number of events to show on mobile

  useEffect(() => {
    if (currentUser) {
      setShowModal(true);
    } else {
      setFormData(currentUser);
    }
  }, [currentUser]);

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const response = await axios.post(
        `/api/user/update/${currentUser._id}`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = response.data;
      if (data.success === false) {
        dispatch(updateUserFailure(data.message));
        return;
      }

      dispatch(updateUserSuccess(data));
      setShowModal(false);
    } catch (error) {
      dispatch(updateUserFailure(error.message));
      toast.error("Error in updating Details");
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };

    fetchProducts();
  }, []);

  const allEvents = useMemo(() => {
    if (events) {
      return events;
    }
    return [];
  }, [events, city, state]);

  // Irrespective of the location, showing promotional events
  const promotionalEvents = useMemo(() => {
    return [
      ...(events || []).filter(
        (event) => event.promotion === true && event.status !== "unverified"
      ),
      ,
    ].reverse();
  }, [events]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const maxEventsToShow = useMemo(() => {
    if (windowWidth < 640) return eventsToShow; // Show based on the current state
    return allEvents.length; // Show all events on larger screens
  }, [windowWidth, allEvents.length, eventsToShow]);

  const handleShowMore = () => {
    setEventsToShow((prevEventsToShow) => prevEventsToShow + 5); // Increase count by 5
  };

  return (
    <div className="bg-white dark:bg-darkPrimary dark:text-white min-h-screen py-0  flex flex-col gap-4">
      <ScrollRestoration />
      <div className="relative">
        <Banner />
        <CategorySection />
        <AboutSection />
        <CollectionSection />
      </div>
      {/* {loading ? (
        <Loader />
      ) : (
        <div>
          <div className="z-10 px-4 md:px-12 py-8">
            <h3 className="text-black dark:text-white font-semibold text-2xl p-2 mb-4">
              ALL PRODUCTS
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2">
              {products
                .map((event) => (
                  <EventCard key={event._id} event={event} />
                ))}
            </div>

            {windowWidth < 640 && maxEventsToShow < products.length && (
              <button
                className="w-1/2 flex justify-center mx-auto bg-black text-white  dark:bg-primary dark:text-black  py-2 px-4 rounded-md mt-4"
                onClick={handleShowMore}
              >
                <span className="flex gap-1 text-sm justify-center items-center ">
                  Show More <IoIosArrowDown />
                </span>
              </button>
            )}
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Home;
