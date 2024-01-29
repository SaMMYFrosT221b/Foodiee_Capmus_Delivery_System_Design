"use client";
import React, { useState } from "react";

const ShowMore = ({ itemsToShow, buttons }) => {
  const [showAll, setShowAll] = useState(false);

  const handleShowMore = () => {
    setShowAll(!showAll);
  };

  const displayedButtons = showAll ? buttons : buttons.slice(0, itemsToShow);

  return (
    <div>
      {displayedButtons.map((button, index) => (
        <button
          key={index}
          className="py-2.5 px-13 w-80 text-sm font-medium text-black bg-white rounded-lg border border-gray-200 focus:outline-none mr-2 mb-2"
        >
          {button.label} food near me
        </button>
      ))}
      {buttons.length > itemsToShow && (
        <button
          onClick={handleShowMore}
          className="py-2.5 px-5 w-80 text-sm font-medium text-black bg-white rounded-lg border border-gray-200 focus:outline-none mr-2 mb-2"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};

const buttons = Array.from({ length: 25 }, (_, index) => ({
  key: index + 1,
  label: `Button ${index + 1}`,
}));

const CousineFiltering = () => {
  return (
    <div>
      <h2 className="ml-[100px] text-2xl font-bold pt-5">
        More Food Options Near Me
      </h2>
      <div className="ml-[100px] mr-[100px] pt-5">
        <ShowMore itemsToShow={15} buttons={buttons} />
      </div>
      <hr className="my-4 border-t border-gray-300" />
    </div>
  );
};

export default CousineFiltering;
