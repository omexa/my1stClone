import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { VscSend } from "react-icons/vsc";
const post = [
  { user: "oumer", post: "laptop1.jpg", img: "oumer.jpg" },
  {
    user: "moaHabtamu",
    post: "laptop2.png",
    img: "Ana_lulseged.jpg",
    likes: 100,
  },
  {
    user: "AbdelKerim",
    post: "laptop3.jpg",
    img: "Ana_lulseged.jpg",
    like: 200,
  },
  { user: "Daniel", post: "MOBILE1.jpg", img: "Daniel_Abera.jpg", like: 250 },
];
function Posts() {
  return (
    <div className="grid w-full justify-center gap-2">
      {post.map((ps, index) => (
        <Post ps={ps} key={index} />
      ))}
    </div>
  );
}

export default Posts;

function Post({ ps, key }) {
  const [like, setLike] = useState(true);
  return (
    <div key={key} className="font-serif bg-gray-50 border ">
      <div className="flex items-center justify-between p-2  ">
        <div className="flex items-center gap-1">
          <img
            src={ps.img}
            className="size-4 ring-2 ring-offset-1 ring-blue-700 rounded-full"
          />
          <p>{ps.user}</p>
        </div>
        <PiDotsThreeOutlineFill size={20} />
      </div>
      <div className="grid h-80 overflow-hidden ">
        <img src={ps.post} alt="image" className="size-full object-fill" />
      </div>
      <div className="flex gap-2 items-center justify-between">
        <div className="flex gap-3 p-2">
          <button onClick={() => setLike((prev) => !prev)}>
            {like ? <AiOutlineHeart size={20} /> : <AiFillHeart size={20} />}
          </button>
          <AiOutlineMessage size={20} />
          <FiSend size={20} />
        </div>
        <MdOutlineBookmarkBorder size={20} />
      </div>
      <div className="px-3 pb-2">
        <div className="flex items-center">
          <img
            src="oumer.jpg"
            className="size-4 rounded-full  ring ring-red-300 ring-offset-1"
          />
          <img
            src="oumer.jpg"
            className="size-4 rounded-full  ring ring-red-300 ring-offset-1"
          />
          <img
            src="oumer.jpg"
            className="size-4 rounded-full  ring ring-red-300 ring-offset-1"
          />
          <p className="pl-3">
            liked by <b>username</b> and {ps.like} others
          </p>
        </div>
        <p>View all comments</p>
        <div className="grid grid-cols-[auto_1fr_auto] items-center">
          <img src="oumer.jpg" className="rounded-full size-6" />
          <input
            className="focus-visible:outline-none bg-inherit p-2"
            placeholder="Add a comment "
          />
          <button onClick={() => {}} className="">
            <VscSend size="1.5rem" className="" />
          </button>
        </div>
      </div>
    </div>
  );
}
