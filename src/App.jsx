import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import Lorem from "./components/Lorem";
import Button from "./components/Button";
import Input from "./components/Input";
import DystopianBooks from "./components/DystopianBooks";
import AddDystopianBook from "./components/AddDystopianBook";
import Oboes from "./components/Oboes";
import Joke from "./components/Joke";
import Fruits from "./components/Fruits";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dystopianBooks: [
        {
          id: 1,
          title: "Gulliver's Travels",
          author: "Jonathan Swift",
          year: 1726,
          wikiUrl: "https://en.wikipedia.org/wiki/Gulliver%27s_Travels",
        },
        {
          id: 2,
          title: "The Last Man",
          author: "Mary Shelley",
          year: 1826,
          wikiUrl: "https://en.wikipedia.org/wiki/The_Last_Man",
        },
      ],
      appTitle: "Dystopian Books",
      isLoading: true,
    };

    setTimeout(() => {
      this.setState((state) => ({ isLoading: false }));
    }, 1 * 1000);
  }

  addBook = () => {
    const newBook = {
      id: 3,
      title: "The Tragedy of Man",
      author: "Imre Madách",
      year: 1862,
      wikiUrl: "https://en.wikipedia.org/wiki/The_Tragedy_of_Man",
    };

    if (this.state.dystopianBooks.length >= 3) {
      return;
    }

    this.setState((state) => ({
      dystopianBooks: [...state.dystopianBooks, newBook],
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Fruits />
          <Joke />
          <Oboes />
          {this.state.isLoading ? <h1>Loading</h1> : <h1>Ready</h1>}
          <h1>{this.state.appTitle}</h1>
          <DystopianBooks
            books={this.state.dystopianBooks.reverse()}
            isOrdered={true}
          />
          <AddDystopianBook addBook={this.addBook} />

          {/* 
        <Lorem
          text={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum voluptas
        consequatur ipsam eum, quia nam, reprehenderit tenetur minima enim
        recusandae cum? Eveniet harum beatae unde possimus facilis quo facere
        soluta!`}
          isRed={true}
        />

        <Counter start={0} /> */}
        </header>
      </div>
    );
  }
}

export default App;
