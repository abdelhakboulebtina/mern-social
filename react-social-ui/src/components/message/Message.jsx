import "./message.css";
import { format } from "timeago.js";
import {useContext} from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
export default function Message({ message, own ,receiverId}) {
  const user=useContext(AuthContext)
  const [receiver, setReceiver] = useState([]);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get("/users/?userId=" + receiverId);
        setReceiver(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user._id,receiverId]);
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src={own ? user?.profilePicture
            ? PF + user.profilePicture
            : PF + "person/noAvatar.png":receiver?.profilePicture
            ? PF + receiver.profilePicture
            : PF + "person/noAvatar.png"}
          alt=""
        />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  );
}