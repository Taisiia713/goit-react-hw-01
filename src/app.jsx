import friends from "./friends.json";
import Friends from "./components/friends/friends";

import transactions from "../transactions.json";
import TransactionHistory from "./components/transactionHistory/transactionHistory";

export default function App() {
  return (
    <>
      <Friends friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
