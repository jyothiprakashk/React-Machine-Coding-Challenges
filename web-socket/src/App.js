import './App.css';
// import socket  from '../socket';
import io from "socket.io-client";
import { useEffect } from 'react';
const socket = io.connect("http://localhost:4000");

function App() {

  const onConnect=(e)=>{
    console.log(e)
  }

  const sendMessage=()=>{
    console.log("he")
    socket.emit("send_message",{message:"sample message"})
  }

  useEffect(()=>{
    socket.on("send_message",(data)=>{
      console.log(data)
    })
  },[])

  // socket.on("message",onConnect)
  console.log("hello",socket)
  return (
    <div className="App">
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
}

export default App;
