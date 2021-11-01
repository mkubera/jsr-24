import React, { Component } from "react";

class Oboes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      oboes: ["oboe"],
      joke: "no joke yet...",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState((state) => ({
        ...state,
        oboes: [...state.oboes, "English horn"],
      }));
    }, 2500);

    console.log("componentDidMount");

    fetch("https://api.chucknorris.io/jokes/random", {
      method: "GET",
      // headers: {
      //   "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
      //   "x-rapidapi-key": "SIGN-UP-FOR-KEY",
      // },
    })
      .then((resp) => resp.json())
      .then((response) => {
        console.log(response);
        this.setState((state) => ({ ...state, joke: response.value }));
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <>
        <p>Norris' joke: {this.state.joke}</p>
        <ul>
          {this.state.oboes.map((o) => (
            <li>{o}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default Oboes;
