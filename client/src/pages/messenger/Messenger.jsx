//npm modules
import "./messenger.css";
import React from "react";
// eslint-disable-next-line class-methods-use-this, no-unused-vars
import { useContext, useEffect, useRef, useState } from "react";
// import axios from 'axios';

//local modules
import Conversation from "../../components/conversation/Conversation";
import Message from "../../components/message/Message";

export default function Messenger(){
  const [newMessage, setNewMessage] = useState("");

  return(
    <div className="messenger">
      <div className="chatMenu">
        <div className="chatMenuHeader">
          
        </div>
        <div className="chatMenuSearchBox">

        </div>
        <div className="conversationList">
          <Conversation  currentUser={"Mike Oryto"}/>
          <Conversation  currentUser={"Mike Oryto"}/>
          <Conversation  currentUser={"Mike Oryto"}/>
          <Conversation  currentUser={"Mike Oryto"}/>
        </div>
      </div>
      <div className="chatBox">
        <div className="chatBoxHeader">

        </div>
        <div className="chatBoxBody">
          <Message message={{text: "Hello", createdAt: "2022-07-03"}} own={true} />
          <Message message={{text: "What Up?", createdAt: "2022-07-03"}} />
          <Message message={{text: "Just checkin' r u free rn?", createdAt: "2022-07-03"}} own={true} />
        </div>
        <div className="chatBoxBottom">
          <textarea
            className="chatMessageInput"
            placeholder="write something..."
            onChange={(e) => setNewMessage(e.target.value)}
            value={newMessage}></textarea>
          <button className="chatSubmitButton">
            Send
          </button>
        </div>
      </div>
    </div>
  )
}