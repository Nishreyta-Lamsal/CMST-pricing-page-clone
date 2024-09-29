import React, { useState } from "react";
import Card from "./Card";
import { data } from "./assets/data";

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const handleToggle = (question) => {
    if (openQuestion === question) {
      setOpenQuestion(null); // Close if clicked again
    } else {
      setOpenQuestion(question); // Open the clicked question
    }
  };

  return (
    <div className="mx-20 md:mx-auto max-w-3xl space-y-4 mt-10 mb-10 lg:text-lg">
      {/* Question 1 */}
      <div className="w-full">
        <div
          onClick={() => handleToggle(1)}
          className="cursor-pointer flex justify-between items-center"
        >
          <p className="mr-4">Can I use CMST for free?</p>
          <span>{openQuestion === 1 ? "▲" : "▼"}</span>
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            openQuestion === 1 ? "max-h-48 sm:max-h-16 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-gray-600 mt-2">
            Yes, we have a free plan that doesn't require a credit card to sign
            up, meaning it's completely free!
          </p>
        </div>
        <hr className="border-gray-300 h-1 w-full mt-7" />
      </div>

      {/* Question 2 */}
      <div className="w-full">
        <div
          onClick={() => handleToggle(2)}
          className="cursor-pointer flex justify-between items-center"
        >
          <p className="mr-4">
            How much do I need to pay for a CMST subscription?
          </p>
          <span>{openQuestion === 2 ? "▲" : "▼"}</span>
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            openQuestion === 2 ? "max-h-48 sm:max-h-16 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-gray-600 mt-2">
            You can get started for free with our Free plan. Please check above
            to know about pricing for our other plans.
          </p>
        </div>
        <hr className="border-gray-300 h-1 w-full mt-7" />
      </div>

      {/* Question 3 */}
      <div className="w-full">
        <div
          onClick={() => handleToggle(3)}
          className="cursor-pointer flex justify-between items-center"
        >
          <p className="mr-4">Which plan is suitable for me?</p>
          <span>{openQuestion === 3 ? "▲" : "▼"}</span>
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            openQuestion === 3 ? "max-h-48 sm:max-h-16 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-gray-600 mt-2">
            We recommend going with the yearly plan because you receive more for
            less.
          </p>
        </div>
        <hr className="border-gray-300 h-1 w-full mt-7" />
      </div>

      {/* Question 4 */}
      <div className="w-full">
        <div
          onClick={() => handleToggle(4)}
          className="cursor-pointer flex justify-between items-center"
        >
          <p className="mr-4">How is the CMST storage used?</p>
          <span>{openQuestion === 4 ? "▲" : "▼"}</span>
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            openQuestion === 4 ? "max-h-48 md:max-h-16 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-gray-600 mt-2">
            When you add applicants on CMST, you can add attachments for each
            applicant. Plus, you can also generate commission invoices and add
            resource files.
          </p>
        </div>
        <hr className="border-gray-300 h-1 w-full mt-7" />
      </div>

      {/* Question 5 */}
      <div className="w-full">
        <div
          onClick={() => handleToggle(5)}
          className="cursor-pointer flex justify-between items-center"
        >
          <p className="mr-4">Are branch office accounts free?</p>
          <span>{openQuestion === 5 ? "▲" : "▼"}</span>
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            openQuestion === 5 ? "max-h-64 sm:max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-gray-600 mt-2">
            Branch office accounts are the same as the main CMST account with
            the difference being they are linked with the main account.
            Therefore, branch office accounts can subscribe to any of the three
            plans (Free, Monthly, Yearly).
          </p>
        </div>
      </div>
    </div>
  );
};

const Pricing = () => {
   const [openDropdown, setOpenDropdown] = useState(null); // Track the open dropdown by card ID

   const toggleDropdown = (id) => {
     // If the clicked card ID is already open, close it; otherwise, open the clicked one
     setOpenDropdown(openDropdown === id ? null : id);
   };
  return (
    <div>
      <div className="flex flex-col items-center justify-center mx-9 mt-20">
        <h1 className="text-2xl lg:text-[34px] text-center font-medium">
          Start your digital revolution today. Use CMST.
        </h1>
        <p className="text-gray-500 font-sans font-semibold text-md lg:text-lg text-center mt-5">
          Unlimited applicants, forms and leads.
          <span className="text-blue-500"> Start Free.</span>
        </p>
        <button className="mt-6 rounded-[3px] text-base lg:text-lg px-6 py-2 lg:px-12 lg:py-2.5 text-white bg-blue-500 font-normal hover:bg-blue-700 transition duration-300 ease-in-out">
          Get Started
        </button>
      </div>

      <div className="flex flex-wrap gap-6 justify-center lg:mt-10 mt-3">
        {data.map((item, index) => (
          <Card
            key={item.id}
            planName={item.planName}
            price={item.price}
            type={item.type}
            features={item.features}
            buttonLabel={item.buttonLabel}
            buttonLink={item.buttonLink}
            isSpecial={item.isSpecial}
            hasDropdown={item.hasDropdown}
            openDropdown={openDropdown} // Pass the openDropdown state
            setOpenDropdown={setOpenDropdown} // Pass the state setter function
            cardId={item.id} // Pass the unique id of the card
          />
        ))}
      </div>

      <div className="border-2 shadow-[0_4px_6px_rgba(128,128,128,0.3)] mb-10 mt-10 px-5 py-6 mx-4 md:mx-20 rounded-lg flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-sm lg:text-2xl md:text-left sm:text-xl">
          Need a dedicated plan to manage your entire organization?
        </p>
        <button className="rounded-[4px] text-sm lg:text-lg px-6 py-2 lg:px-8 lg:py-3.5 text-white bg-blue-500 font-normal hover:bg-blue-700 transition duration-300 ease-in-out">
          Contact Us
        </button>
      </div>

      <div className="bg-[#f5fff5] flex flex-col items-center">
        <div className="w-full">
          <p className="text-center text-5xl font-bold mt-14">FAQ</p>
        </div>
        <FAQ />
      </div>

      <div className="flex flex-col justify-center items-center mt-20 mb-20 mx-6 lg:mx-0">
        <p className="font-bold text-[29px] mb-3">
          Looking For Something Else?
        </p>
        <p className="text-lg mb-6">
          Only a few more steps to start your digital revolution.
        </p>
        <button className="rounded-3xl text-md font-semibold px-14 py-2.5 lg:px-16 lg:py-2.5 text-white bg-blue-500 hover:bg-blue-700 transition duration-300 ease-in-out">
          Contact Sales
        </button>
      </div>
    </div>
  );
};

export default Pricing;
