import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode, toggleSideBar } from "../utils/appSlice";
import { LOGO_URL } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import {
  Menu,
  MoonStar,
  Search,
  SunIcon,
  Upload,
  UserRound,
  Video,
} from "lucide-react";
import useSuggestions from "../utils/hooks/useSuggestions";
import SuggestionList from "./SuggestionList";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cache = useSelector((store) => store.search);
  const darkMode = useSelector((store) => store.app.darkMode);

  const suggestions = useSuggestions(cache, searchText);

  const handleListClick = (s) => {
    navigate("results?search_query=" + s);
    setSearchText(s);
    setShowSuggestions(false);
  };

  const toggleHandler = () => {
    dispatch(toggleSideBar());
  };

  const toggleMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <div className="transition-bg p-2 md:p-5 shadow-lg grid grid-flow-col dark:bg-[#0f0f0f]">
      <div className="flex col-span-1 items-center">
        <Menu
          onClick={toggleHandler}
          className="hidden md:block cursor-pointer md:mr-4 dark:text-[#fff] "
        />
        <Link to={"/"}>
          {darkMode ? (
            <h1 className="text-white font-extrabold md:text-2xl text-sm ml-2 ">
              VidTube
            </h1>
          ) : (
            <img className="w-12 md:w-28  ml-2 " alt="logo" src={LOGO_URL} />
          )}
        </Link>
      </div>

      <div className="col-span-10 ml-6 md:ml-28">
        <div className="w-[78%]  flex items-center">
          <input
            className="flex h-10 md:w-full rounded-md border border-black/30 dark:border-gray-400 bg-transparent px-3 py-2 text-xs dark:placeholder:text-gray-200 dark:text-[#fff] placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-pink-800/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onClick={() => setShowSuggestions(true)}
          />
          <button className=" p-2 " onClick={() => handleListClick(searchText)}>
            {<Search className="dark:text-[#fff]" />}
          </button>
          <Upload
            size={46}
            className="mx-4 hidden md:block bg-slate-100 dark:bg-[#3c3c3c] dark:text-[#fff]  rounded-full p-2 hover:bg-pink-800 dark:hover:bg-pink-700 cursor-pointer  hover:rounded-full hover:text-white"
          />
          <Video
            size={46}
            className=" hidden md:block hover:bg-pink-800 dark:bg-[#3c3c3c] dark:text-[#fff] bg-slate-100 rounded-full p-2 hover:rounded-full hover:text-white dark:hover:bg-pink-700 cursor-pointer"
          />
          <div>
            {darkMode ? (
              <SunIcon
                size={32}
                onClick={() => toggleMode()}
                className="mx-4 md:size-11 hover:bg-pink-800  dark:bg-[#3c3c3c] dark:text-[#fff] bg-slate-100 rounded-full p-2 hover:rounded-full hover:text-white dark:hover:bg-pink-700 cursor-pointer"
              />
            ) : (
              <MoonStar
                size={32}
                onClick={() => toggleMode()}
                className="mx-4 md:size-11 hover:bg-pink-800 dark:bg-[#3c3c3c] dark:text-[#fff] bg-slate-100 rounded-full p-2 hover:rounded-full hover:text-white dark:hover:bg-pink-700 cursor-pointer"
              />
            )}
          </div>
        </div>
        {showSuggestions && (
          <SuggestionList
            suggestions={suggestions}
            handleClick={handleListClick}
          />
        )}
      </div>
      <div className="col-span-1 flex items-center">
        <UserRound className="hidden md:block dark:text-[#fff]" />
      </div>
    </div>
  );
};

export default Header;
