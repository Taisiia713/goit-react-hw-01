import React from "react";
import ReactDOM from "react-dom/client";
import Profile from "./components/profile/profile";
import FriendList from "./components/friendList/friendList";
import TransactionHistory from "./components/transactionHistory/transactionHistory";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Profile />
    <FriendList />
    <TransactionHistory />
  </React.StrictMode>
);
