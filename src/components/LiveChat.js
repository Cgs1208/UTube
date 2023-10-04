import React, { useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  generateRandomMessages,
  generateRandomNames,
} from "../utils/HelperFile";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      //API Polling need to be done here to get live chat and names
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: generateRandomMessages(20),
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const liveMessageHandler = (e) => {
    e.preventDefault();
    dispatch(
      addMessage({
        name: "Charan Gs",
        message: liveMessage,
      })
    );
    setLiveMessage("");
  };

  return (
    <>
      <div className="ml-2 w-full h-[500px] p-2 border border-black rounded-lg bg-slate-100 overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((chat) => (
            <ChatMessage
              key={uuidv4()}
              name={chat.name}
              message={chat.message}
            />
          ))}
        </div>
      </div>

      <form
        className="border border-black w-full p-1 ml-2 rounded-lg"
        onSubmit={liveMessageHandler}
      >
        <input
          className="border border-black w-64 rounded-md p-2 mx-1"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-4 py-1 mx-2 rounded-md bg-green-300">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
