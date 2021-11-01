import { useState, useEffect } from "react";

const Joke = () => {
  const [joke, setJoke] = useState(""); // => [state, changeStateFn]

  useEffect(() => {}, []);

  return <p>{joke}</p>;
};

export default Joke;
