import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { openSidebar } from "../appSlice";
import { TAB_VIDEO_URL, YOUTUBE_API_KEY } from "../constants";

const useSearchResults = () => {
  const dispatch = useDispatch();
  const [searchResults, setSearchResults] = useState([]);
  const [search] = useSearchParams();
  const query = search.get("search_query");
  
  useEffect(() => {
    getSearchList();
    dispatch(openSidebar());
  }, [query]);

  const getSearchList = async () => {
    const data = await fetch(
      `${TAB_VIDEO_URL}${query}&type=video&key=${YOUTUBE_API_KEY}`
    );
    const json = await data.json();
    setSearchResults(json.items);
  };

  return searchResults;
};

export default useSearchResults;
