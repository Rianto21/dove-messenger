// import axios from 'axios';
// import { useEffect, useState } from 'react';
import React from "react";
import "./conversation.css";

export default function Conversation({currentUser}) {
  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src="https://i.pinimg.com/736x/28/95/9c/28959c030ba3d23d564a0eee0206bb5c.jpg"
        alt="Marin Kitagawa"
      />
      <span className="conversationName">{currentUser}</span>
    </div>
  );
}