import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../src/features/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="counter-container">
        <h1>Redux Toolkit Counter</h1>
        <div className="count-display">{count}</div>

        <div className="button-container">
          <button onClick={() => dispatch(increment())} className="btn">
            Increase
          </button>
          <button onClick={() => dispatch(decrement())} className="btn"
           disabled={count === 0}>
            Decrease
          </button>
          <button onClick={() => dispatch(reset())} className="btn">
            reset
          </button>
        </div>
      </div>
      </header>
     
    </div>
  );
}

export default App;
