import React from "react";

function Comment({ data }) {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-md bg-gray-100 p-2 my-2 rounded-lg">
      <img
        className="h-7 w-7"
        src="https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small/profile-icon-design-free-vector.jpg"
        alt="profile-pic"
      />
      <div className="pl-1">
        <p className="font-bold ">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Comment;
