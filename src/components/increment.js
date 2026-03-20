function Increment(props) {
  return (
    <div>
     
      <button onClick={() => props.setCounts(props.counts + 1)}>Increment</button>
    </div>
  );
}

export default Increment;