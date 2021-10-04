import { useState } from "react";

const Counter = ({ start }) => {
  const [count, setCount] = useState(start);

  return (
    <div>
      <h1>
        Counter <small>({start})</small>
      </h1>
      <p>
        <button onClick={() => setCount(count + 1)}>+1</button>
      </p>
      <p>{count}</p>
      <p>
        <button onClick={() => setCount(count - 1)}>-1</button>
      </p>
      <p>
        <button onClick={() => setCount(start)}>reset</button>
      </p>
    </div>
  );
};

export default Counter;
