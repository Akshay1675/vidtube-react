import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  TAB_VIDEO_URL,
  YOUTUBE_API_KEY,
  YOUTUBE_VIDEO_URL,
} from "../constants";

const useVideoList = () => {
  const currentTab = useSelector((store) => store.app.mainContainerStatus);
  const [videoList, setVideoList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextPageToken, setNextPageToken] = useState("");

  useEffect(() => {
    setVideoList([]);
    currentTab === "All" ? getVideos() : tabVideos();
  }, [currentTab]);

  const getVideos = async (pageToken = "") => {
    setLoading(true);
    const data = await fetch(`${YOUTUBE_VIDEO_URL}&pageToken=${pageToken}`);
    const json = await data.json();
    setVideoList((prevVideos) => [...prevVideos, ...json?.items]);
    setNextPageToken(json.nextPageToken || "");
    setLoading(false);
  };

  const tabVideos = async (pageToken = "") => {
    setLoading(true);

    const data = await fetch(
      `${TAB_VIDEO_URL}${currentTab}&type=video&key=${YOUTUBE_API_KEY}&pageToken=${pageToken}`
    );
    const json = await data.json();
    setVideoList((prevVideos) => [...prevVideos, ...json?.items]);
    setNextPageToken(json.nextPageToken || "");
    setLoading(false);
  };

  return { tabVideos, getVideos, nextPageToken, videoList, loading };
};

export default useVideoList;
