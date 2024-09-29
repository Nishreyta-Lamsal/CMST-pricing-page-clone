import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Card = ({ planName, price, type, features, buttonLabel, buttonLink, isSpecial, hasDropdown,openDropdown, setOpenDropdown, cardId }) => {
  const [selectedOption, setSelectedOption] = useState("Billed Yearly");

  // Function to handle dropdown toggle
  const toggleDropdown = () => {
    if (openDropdown === cardId) {
      setOpenDropdown(null); // Close the dropdown if clicked again
    } else {
      setOpenDropdown(cardId); // Open the dropdown for this card
    }
  };

  // Function to handle option selection
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setOpenDropdown(null); // Close dropdown after selection
  };

  return (
    <div className="py-8 px-4 rounded-lg shadow-xl ml-4 md:ml-0">
      <div className="flex flex-col text-center justify-center">
        <h2 className="text-xl"> {planName} </h2>
        <p className="text-[36px] font-medium mt-3"> {price} </p>
        <p className="text-sm mb-3"> {type} </p>

        {/* Render the dropdown only if hasDropdown is true */}
        {hasDropdown && (
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="bg-gray-100 px-4 py-2 rounded hover:bg-gray-300 transition duration-300 text-sm"
            >
              {selectedOption}
              <FontAwesomeIcon icon={faCaretDown} className="ml-9" />
            </button>
            {openDropdown === cardId && (
              <ul className="absolute bg-white shadow-lg rounded-lg mt-2 ml-[3.7rem] w-[11.5rem]">
                <li
                  className={`cursor-pointer bg-gray-100 px-4 py-2 rounded hover:bg-gray-300 transition duration-300 text-sm ${
                    selectedOption === "Billed Yearly"
                      ? "bg-blue-500"
                      : ""
                  }`}
                  onClick={() => handleOptionSelect("Billed Yearly")}
                >
                  Billed Yearly
                </li>
                <li
                  className={`cursor-pointer bg-gray-100 px-4 py-2 rounded hover:bg-gray-300 transition duration-300 text-sm ${
                    selectedOption === "Billed Monthly"
                      ? "bg-blue-500 "
                      : ""
                  }`}
                  onClick={() => handleOptionSelect("Billed Monthly")}
                >
                  Billed Monthly
                </li>
              </ul>
            )}
          </div>
        )}

        <a href={buttonLink}>
          {isSpecial ? ( // Conditional rendering based on isSpecial
            <button className="rounded-[4px] border-[1px] border-blue-500 text-base font-bold px-12 py-2.5 text-blue-500 bg-white hover:text-white hover:bg-blue-500 transition duration-300 ease-in-out mb-6">
              Get a free <br /> Account
            </button>
          ) : (
            <button className="rounded-[3px] text-base font-semibold px-10 py-2.5 text-white bg-blue-500 hover:bg-blue-700 transition duration-300 ease-in-out mb-6 mt-5">
              {buttonLabel}
            </button>
          )}
          <hr />
        </a>
      </div>
      <div className="mt-5">
        <ul>
          {features.map((feature, index) => (
            <li className="mb-4" key={index}>
              <FontAwesomeIcon icon={faCheck} className="mr-2" /> {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
