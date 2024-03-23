import React from "react";
import users from "./part2/allUsers";
import Posts from "./part2/posts";
import { IoMdAdd } from "react-icons/io";

function MainPage() {
  return (
    <div className=" overflow-y-hidden md:pt-5 grid grid-rows-[auto_1fr] max-sm:grid-rows-[auto_1fr_auto] gap-y-5">
      <div className="whitespace-nowrap overflow-y-auto hide-scrollbar  border grid grid-flow-col  auto-cols- gap-x-5">
        <div className=" p-1 w-16 h-full flex flex-col items-center justify-center bg-inherit">
          <IoMdAdd
            size="20px"
            className="border border-black p-0 rounded-full"
          />
          <p>Story</p>
        </div>

        {users.map((usr, index) => (
          <div className="w-12 p-1 flex flex-col items-center ">
            <img
              key={index}
              src={usr.img}
              alt="image"
              className="rounded-full size-10 ring-2 ring-offset-2"
            />
            <p className="font-serif text-wrap break-all line-clamp-1 text-xs">
              {usr.name}
            </p>
          </div>
        ))}
      </div>
      <div className="overflow-y-auto hide-scrollbar">
        <Posts />
      </div>
    </div>
  );
}

export default MainPage;
