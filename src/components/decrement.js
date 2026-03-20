function Decrement(props) {
  return (
    <div>
     
      <button onClick={() => props.setCounts(props.counts - 1)}>Decrement</button>
    </div>
  );
}

export default Decrement;