import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../constants";
import { useDispatch } from "react-redux";
import { addCache } from "../searchSlice";

const useSuggestions = (cache, searchText) => {
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      cache[searchText]
        ? setSuggestions(cache[searchText])
        : getSearchSuggestions();
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchText);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(addCache({ [searchText]: json[1] }));
  };

  return suggestions;
};

export default useSuggestions;
