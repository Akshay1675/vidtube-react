import React, { useEffect, useState } from "react";
import LiveChat from "./LiveChat";
import {
  getRandomImageURL,
  getRandomName,
  getRandomTextMessage,
} from "../utils/helper/chatMessages";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../utils/chatSlice";

const LiveChatContainer = () => {
  const dispatch = useDispatch();
  const chatMessageList = useSelector((store) => store.chat.chatList);
  const [inputChat, setInputChat] = useState("");
  
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addChat({
          name: getRandomName(),
          message: getRandomTextMessage(),
          img: getRandomImageURL(),
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className=" border border-gray-500 dark:border-gray-200 bg-slate-50 dark:bg-[#0f0f0f] rounded-lg p-4 w-full h-[490px] overflow-y-scroll flex flex-col-reverse">
        {chatMessageList?.map((c) => (
          <LiveChat name={c.name} message={c.message} img={c.img} />
        ))}
      </div>
      <form
        className="p-2 border dark:border-gray-200  border-black rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          inputChat &&
            dispatch(addChat({ name: "Akshay Desai", message: inputChat }));
          setInputChat("");
        }}
      >
        <div className="flex w-full items-center space-x-2 md:w-1/4">
          <input
            className="flex h-10 rounded-md border dark:border-gray-200/30 border-black/30 bg-transparent px-3 py-2 text-sm dark:text-[#fff] dark:placeholder:text-gray-200 placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            value={inputChat}
            onChange={(e) => setInputChat(e.target.value)}
          ></input>
          <button
            type="submit"
            className="rounded-md bg-pink-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-800/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Send
          </button>
        </div>
      </form>
    </>
  );
};

export default LiveChatContainer;
