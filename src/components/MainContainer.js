import React, { useEffect } from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useDispatch } from "react-redux";
import { closeWatchPage } from "../utils/appSlice";

const MainContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeWatchPage());
  });
  return (
    <div className="dark:bg-[#0f0f0f]">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;

