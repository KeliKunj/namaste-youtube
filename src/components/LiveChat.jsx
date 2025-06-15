import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { randomNamesGenerator, randomMessageGenerator } from "../utils/helper";

function LiveChat() {
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.messages);
  const [liveMessage, setLiveMessage] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      //API Polling every second
      console.log("Live Chat is running");
      dispatch(
        addMessage({
          name: randomNamesGenerator(),
          message: randomMessageGenerator(20),
        })
      );
    }, [1000]);
    return () => {
      clearInterval(interval);
    };
  }, []);
  console.log("Live Chat Messages: ", chatMessage);

  return (
    <div className="w-full">
      <div className="border border-black w-full overflow-y-scroll h-[380px] flex flex-col-reverse">
        {chatMessage.map((item, index) => (
          <ChatMessage key={index} name={item.name} message={item.message} />
        ))}
      </div>
      <form
        className="flex"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({ name: "Garima", message: liveMessage }));
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className="border border-black w-full rounded-s-2xl px-4 py-1"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="bg-blue-400 font-semibold rounded-e-2xl text-white text-sm p-1 px-4">
          Send
        </button>
      </form>
    </div>
  );
}

export default LiveChat;
