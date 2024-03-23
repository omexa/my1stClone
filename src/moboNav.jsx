import React from "react";
import { AiFillHome, AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { MdOutlineAddBox } from "react-icons/md";
function MoboNav() {
  return (
    <div className="flex justify-between ml-1">
      <AiFillHome size="2rem" className="ml-2 " />
      <AiOutlineSearch size="2rem" className="ml-2" />
      <MdOutlineAddBox size="2rem" className="ml-2 " />
      <AiOutlineHeart size="2rem" className="ml-2 " />

      <img src="oumer.jpg" className="size-8 rounded-full ml-2 ring" />
    </div>
  );
}

export default MoboNav;
