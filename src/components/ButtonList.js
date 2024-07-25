import React from "react";
import Button from "./Button";
import { buttons } from "../utils/constants";
import { useSelector } from "react-redux";

const ButtonList = () => {
  const Sidebar = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className={`m-2 md:flex mx-2 hidden ${!Sidebar && "ml-[4.5rem]"}`}>
      {buttons.map((button, index) => (
        <Button key={index} name={button} />
      ))}
    </div>
  );
};

export default ButtonList;
