import React, { useEffect } from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow p-2">
      <img
        className="h-6 w-6"
        src="https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small/profile-icon-design-free-vector.jpg"
        alt="profile-pic"
      ></img>
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
