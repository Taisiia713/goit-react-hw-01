import React from "react";
import ReactDOM from "react-dom/client";
import Profile from "./components/profile/profile";
import FriendList from "./components/friendList/friendList";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Profile />
    <FriendList />
  </React.StrictMode>
);
