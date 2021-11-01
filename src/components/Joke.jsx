import { useState, useEffect } from "react";

const Joke = () => {
  const [joke, setJoke] = useState(""); // => [state, changeStateFn]

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((resp) => resp.json())
      .then((resp) => setJoke(resp.value))
      .catch((err) => console.error(err));
  }, []);

  return <p>{joke}</p>;
};

export default Joke;
