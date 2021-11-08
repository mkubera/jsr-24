import { useState } from "react";

const Fruits = () => {
  const INIT_SHOW_COUNT = 0;
  const [showCount, setShowCount] = useState(INIT_SHOW_COUNT);

  const fruits = [
    { id: 1, name: "Pineapple", isNew: true },
    { id: 2, name: "Orange", isNew: !true },
    { id: 3, name: "Persimmon", isNew: !true },
    { id: 4, name: "Persimmon", isNew: !true },
    { id: 5, name: "Persimmon", isNew: !true },
  ];

  return (
    <>
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
