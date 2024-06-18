import Profile from "../profile/Profile";
import userData from "../../userData.json";

import friends from "../../friends.json";
import Friends from "../friends/Friends";

import transactions from "../../transactions.json";
import TransactionHistory from "../transactionHistory/TransactionHistory";

export default function App() {
  return (
    <>
      <Profile user={userData} />
      <Friends friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
