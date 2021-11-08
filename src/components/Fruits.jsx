import { useState } from "react";

const Fruits = () => {
  const INIT_SHOW_COUNT = 0;
  const [showCount, setShowCount] = useState(INIT_SHOW_COUNT);

  const fruits = [{ id: 1, name: noob - fruit }];

  return (
    <>
      <h1>These are the fruits I ♥</h1>
      <ul>
        {fruits
          .filter((f, i) => i <= showCount)
          .map(({ id, name, isNew }) => (
            <li key={id}>
              {name} {isNew ? "nowosc" : ""}
            </li>
            // <Fruit {...f} />
          ))}
      </ul>
      <button onClick={(e) => setShowCount(showCount + 1)}>Show More</button>
    </>
  );
};

export default Fruits;
