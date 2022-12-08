import Link from "next/link";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import ChatMessage from "../components/chat";
let socket;

export default function Chat() {
  // want to try and make a chat room that uses websocket to live update the chat
  const [input, setInput] = useState("");
  const [chats, setChats] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [userName, setUserName] = useState("");

  const onChangeHandler = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
    //socket.emit("input-change", e.target.value);
  };

  const onSubmit = (e) => {
    console.log("here");
    console.log(chats);
    socket.emit("input-change", { input, userName });
  };

  useEffect(() => {
    socketInitializer();
  }, []);

  const socketInitializer = async () => {
    await fetch("/api/socket");
    socket = io();

    socket.on("connect", () => {
      console.log("connected");
      socket.emit("load", "test");
      console.log("emmit");
    });

    socket.on("update-input", (msg) => {
      setChats(msg);
    });
  };
  const userNameSubmit = (e) => {
    e.preventDefault();
    setInput("");
    setUserName(userInput);
  };
  if (userName === "") {
    return (
      <>
        <h2 style={{ textAlign: "center" }}>What is your username?</h2>
        <form onSubmit={userNameSubmit}>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <input type="submit" />
        </form>
      </>
    );
  }
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <button>Home</button>
            </Link>
          </li>
        </ul>
      </nav>
      <h1 style={{ textAlign: "center" }}>Chat Room</h1>
      <input placeholder="Type something" onChange={onChangeHandler} />
      <button onClick={(e) => onSubmit(e)}>Submit</button>
      <h2>Chats</h2>
      {[...Array(chats.length)]
        .map((_, i) => (
          <ChatMessage
            key={i}
            user={chats[i].userName}
            message={chats[i].input}
          />
        ))
        .reverse()
        .slice(0, 25)}
    </>
  );
}
