export default function Items({ oneTransaction }) {
  const { type, amount, currency } = oneTransaction;
  return (
    <>
      <td>{type} </td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
}
