function Increment(props) {
  return (
    <div>
     
      <button onClick={() => props.setCounts(props.counts + 1)}>Increment2</button>
    </div>
  );
}

export default Increment;