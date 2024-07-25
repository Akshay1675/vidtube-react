import React from "react";
import { useSelector } from "react-redux";
import { valueConvertor } from "../utils/constants";
import moment from "moment";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const Sidebar = useSelector((store) => store.app.isMenuOpen);

  return (
    <div
      className={`m-${Sidebar ? "4" : "2"} ${
        Sidebar ? "w-80" : "w-[25rem]"
      } dark:text-[#bcbcbc] `}
    >
      <img
        className={`rounded-lg ${!Sidebar && "w-full"}`}
        alt="thumbnail"
        src={snippet.thumbnails.medium.url}
      />
      <div className="m-2 ">
        <h1 className="font-bold my-2 h-12 overflow-hidden dark:text-[#fff]">
          {snippet.title}
        </h1>
        <p classname="mt-1 font-bold ">{snippet.channelTitle}</p>
        {statistics ? (
          <p classname="mb-1 font-bold ">
            {valueConvertor(statistics.viewCount)} views &bull;{" "}
            {moment(snippet.publishedAt).fromNow()}{" "}
          </p>
        ) : (
          <p classname="mb-1 font-bold">
            125K views &bull; {moment(snippet?.publishedAt).fromNow()}
          </p>
        )}
      </div>
    </div>
  );
};

export default VideoCard;
