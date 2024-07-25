import { useEffect } from "react";
import { useSelector } from "react-redux";

const useInfiniteScroll = (tabVideos, getVideos, nextPageToken) => {
  const currentTab = useSelector((store) => store.app.mainContainerStatus);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 5 >=
      document.documentElement.scrollHeight
    ) {
      if (currentTab === "All") {
        getVideos(nextPageToken);
      } else {
        tabVideos(nextPageToken);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [nextPageToken, currentTab]);
};

export default useInfiniteScroll;
