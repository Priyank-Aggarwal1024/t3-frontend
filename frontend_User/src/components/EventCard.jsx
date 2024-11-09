import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <Link to={`/product/${event._id}`}>
      <div className="border border-primary bg-lightSecondary text-darkSecondary dark:text-white dark:bg-darkSecondary shadow-lg rounded-md overflow-hidden mt-3 w-full">
        <div className="p-4 flex gap-4 justify-between">
          <img
            className="w-48 h-48 aspect-square object-cover rounded-md"
            src={event.image}
            alt={event.name} // Use event name as alt text for accessibility
          />
          <div className="flex flex-col justify-between">
            <h3 className="font-semibold text-base truncate dark:text-white uppercase">
              {event.name}
            </h3>
            <p className="text-xs ">
              {event.description.length > 100
                ? `${event.description.slice(0, 100)}...`
                : event.description}
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-xs">
                <p className="m-0">{`${event.subcategory}, ${event.category}`}</p>
                <p>₹{event.price}</p>
                <p>{event.quantity} Units</p>
              </div>
              <button className="px-6 py-2 bg-primary rounded-md w-full">
                Enquire
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
