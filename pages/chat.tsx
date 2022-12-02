import { useEffect, useState } from "react";
import io from "socket.io-client";
import ChatMessage from "../components/chat"
let socket;

export default function Chat() {
  // want to try and make a chat room that uses websocket to live update the chat
  const [input, setInput] = useState('');
  const [chats, setChats] = useState([])

  const onChangeHandler = (e) => {
    console.log(e.target.value)
    setInput(e.target.value);
    //socket.emit("input-change", e.target.value);
  };

  const onSubmit = (e) => {
    console.log('here')
    console.log(chats)
    socket.emit("input-change", input);
  }

  useEffect(() => {
    socketInitializer();
  }, []);

  const socketInitializer = async () => {
    await fetch("/api/socket");
    socket = io();

    socket.on("connect", () => {
      console.log("connected");
      socket.emit("load", 'test');
      console.log('emmit')
    });

    socket.on('update-input', msg => {
      setChats(msg)
    })
  };
  return (
    <>
      <div>Hello</div>
      <h1>Chat</h1>
      <input
        placeholder="Type something"
        onChange={onChangeHandler}
      />
      <button onClick={(e) => onSubmit(e)}>Submit</button>
      <h2>chats</h2>
      {[...Array(chats.length)].map((message, i) => <ChatMessage key={i} message={chats[i]}/>)}
    </>
  );
}
