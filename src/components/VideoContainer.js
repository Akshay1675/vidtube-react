import React from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";
import useInfiniteScroll from "../utils/hooks/useInfiniteScroll";
import useVideoList from "../utils/hooks/useVideoList";

const VideoContainer = () => {
  const currentTab = useSelector((store) => store.app.mainContainerStatus);
  const Sidebar = useSelector((store) => store.app.isMenuOpen);

  const { tabVideos, getVideos, nextPageToken, videoList, loading } =
    useVideoList();

  useInfiniteScroll(tabVideos, getVideos, nextPageToken);

  if (videoList.length < 0) {
    return <Shimmer />;
  }

  return loading ? (
    <Shimmer />
  ) : (
    <div
      className={`${
        !Sidebar ? "md:ml-[4.5rem]" : ""
      } md:ml-2 md:flex md:flex-wrap ml-5`}
    >
      {videoList?.map((video, i) => (
        <Link
          key={video.id}
          to={
            currentTab === "All"
              ? "/watch?v=" + video.id
              : "/watch?v=" + video.id.videoId
          }
        >
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
