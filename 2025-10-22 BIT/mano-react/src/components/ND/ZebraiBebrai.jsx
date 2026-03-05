export default function ZebraiBebrai(props) {

  const color = props.variant === 1 ? 'blue' : 'red';

  return (
    <h1 style={{ color: color }}>
      Zebrai ir Bebrai
    </h1>
  );

}