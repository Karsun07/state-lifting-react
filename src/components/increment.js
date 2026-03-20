function Increment(props) {
  return (
    <div>
      <h1>child count: {props.counts}</h1>
      <button onClick={() => props.setCounts(props.counts + 1)}>Increment2</button>
    </div>
  );
}

export default Increment;