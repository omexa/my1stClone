import React from "react";
import users from "./part2/allUsers";

const RightSide = () => {
  return (
    <div className="overflow-x-auto hide-scrollbar  p-5 max-sm:hidden">
      <div className="p-2 grid gap-x-4 grid-cols-[auto_1fr_auto] items-center">
        <img src="oumer.jpg" className="size-12 rounded-full" />
        <div className="">
          <p className="font-bold">OUMER</p>
          <p className="text-xs text-gray-500">OUMER</p>
        </div>
        <a className="text-sky-500 font-semibold">Switch</a>
      </div>
      <div className="p-2 grid grid-cols-2 items-center ">
        <p className=" text-gray-400 font-semibold">suggestions for you</p>
        <p className="font-semibold  flex justify-end">See All</p>
      </div>
      {users.map((usr) => (
        <div className="grid grid-cols-[auto_1fr_auto] items-center">
          <img
            src={usr.img}
            className="rounded-full h-10 w-10 m-1 border border-black"
          />
          <div>
            <p className="font-bold">{usr.name}</p>
            <p className="text-gray-500 text-xs">
              Followed by {usr.followers} more
            </p>
          </div>
          <a className="text-sky-500 font-semibold cursor-pointer">Follow</a>
        </div>
      ))}
    </div>
  );
};

export default RightSide;
