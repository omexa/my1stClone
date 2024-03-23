import React from "react";
import {
  AiFillHome,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineSearch,
} from "react-icons/ai";
import { FiShoppingBag, FiSend, FiCamera } from "react-icons/fi";

import { MdOutlineAddBox, MdOutlineExplore } from "react-icons/md";
function Nav() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl grid grid-cols-[auto_auto_auto] max-sm:grid-cols-2 items-center border-b-2 px-2 py-2 md:px-48 ">
      <div className="flex items-center">
        <FiCamera size="1.8rem" className="md:hidden" />
        <p className=" font-bold  text-lg">instagram</p>
      </div>
      <div className="ml-2 grid gap-x-2 grid-cols-[auto_1fr] bg-white items-center p-1 rounded-md border overflow-hidden max-sm:hidden">
        <AiOutlineSearch />
        <input placeholder="search" className="focus-visible:outline-none" />
      </div>
      <div className="flex justify-end ml-1 items-center">
        <button>
          <AiFillHome size="1.6rem" className="ml-2 max-sm:hidden" />
        </button>
        <button>
          <AiOutlineMessage size="1.6rem" className="ml-2 max-sm:hidden" />
        </button>
        <button>
          <MdOutlineAddBox size="1.6rem" className="ml-2 max-sm:hidden" />
        </button>
        <button>
          <FiSend size="1.6rem" className="ml-2 max-sm:size-8 md:hidden" />
        </button>
        <button>
          <MdOutlineExplore size="1.6rem" className="ml-2 max-sm:hidden" />
        </button>
        <button>
          <AiOutlineHeart size="1.6rem" className="ml-2 max-sm:hidden" />
        </button>
        <button>
          <FiShoppingBag
            size="1.6rem"
            className="ml-2 max-sm:size-8 md:hidden"
          />
        </button>
        <img
          src="oumer.jpg"
          className="size-8 rounded-full ml-2 max-sm:hidden"
        />
      </div>
    </div>
  );
}

export default Nav;
