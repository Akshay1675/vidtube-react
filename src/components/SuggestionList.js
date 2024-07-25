import React from "react";

const SuggestionList = ({ suggestions, handleClick }) => {
  return (
    <div>
      <ul className="absolute bg-white dark:bg-[#3c3c3c] dark:text-[#fff] w-[11rem] md:w-[31rem] rounded-lg shadow-xl">
        {suggestions?.map((s, index) => (
          <li
            key={index}
            className="px-6 py-3 font-semibold hover:bg-pink-800 hover:text-white hover:cursor-default "
            onClick={() => handleClick(s)}
          >
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuggestionList;
