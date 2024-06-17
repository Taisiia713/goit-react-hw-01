export default function Items({ oneTransaction: { type, amount, currency } }) {
  return (
    <>
      <td>{type} </td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
}
