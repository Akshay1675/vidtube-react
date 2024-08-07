import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTab } from "../utils/appSlice";

const Button = ({ name }) => {
  const currentTab = useSelector((store) => store.app.mainContainerStatus);
  const dispatch = useDispatch();

  const handleClick = (b) => {
    dispatch(changeTab(b));
  };
  return (
    <div className="">
      <button
        onClick={() => handleClick(name)}
        className={`px-6 py-1 mx-2 my-2 rounded-md cursor-pointer ${
          currentTab === name
            ? "bg-black dark:bg-gray-300 dark:text-black text-white"
            : "bg-gray-200 dark:bg-[#3c3c3c] dark:text-[#fff] dark:hover:bg-pink-800 hover:bg-pink-800 hover:text-white text-gray-700"
        }`}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
