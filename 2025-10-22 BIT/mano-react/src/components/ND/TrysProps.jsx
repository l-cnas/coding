export default function TrysProps(props) {

  return (
    <div>
      <h1 style={{ color: props.color }}>
        {props.h1}
      </h1>

      <h2 style={{ color: props.color }}>
        {props.h2}
      </h2>
    </div>
  );

}