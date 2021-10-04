import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import Lorem from "./components/Lorem";

function App() {
  // const newDate = new Date();
  // const nums = [1, 2, 3, 4];
  // const sum = nums.reduce((acc, n) => acc * n, 1);
  // const lis = [<li>1</li>, <li>2</li>];

  return (
    <div className="App">
      <header className="App-header">
        <Lorem text={`Hello, world!`} isRed={false} />
        <Lorem
          text={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum voluptas
        consequatur ipsam eum, quia nam, reprehenderit tenetur minima enim
        recusandae cum? Eveniet harum beatae unde possimus facilis quo facere
        soluta!`}
          isRed={true}
        />

        {/* Lorem({ 
          text: "lorem...",
          isRed: true,
        })

        const Lorem = (props) => {

        } */}

        <h1>Hello, world!</h1>
        <Counter start={0} />
        <Counter start={10} />
        <Counter start={100} />
        {/* <time>{newDate.toString()}</time>
        <p>2 + 2 = {2 + 2}</p>
        <p>{sum}</p>
        <p>{nums.length}</p>
        <ul>
          {nums.map((n) => (
            <li>{n}</li>
          ))}
        </ul>
        <ul>{lis}</ul> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
