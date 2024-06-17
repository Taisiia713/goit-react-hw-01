import Items from "../items/items";
import transactions from "../../transactions.json";
import css from "./transactionHistory.module.css";

export default function TransactionHistory() {
  return (
    <div className={css.container}>
      <table className={css.table}>
        <thead>
          <tr>
            <td>Type</td>
            <td>Amount</td>
            <td>Currency</td>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <Items oneTransaction={transaction} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
