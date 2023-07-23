import { useState } from "react";
import Keypad from "./Components/Keypad";
import "./index.css";
function App() {
  const [input, setInput] = useState("");
  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleEqual = () => {
    // eslint-disable-next-line no-eval
    setInput(eval(input).toString());
  };

  const handleClear = () => {
    setInput("");
  };
  return (
    <div className="App">
      <div className="calculator">
        <input className="display" type="text" value={input} readOnly />
        <Keypad
          handleClear={handleClear}
          handleClick={handleClick}
          handleEqual={handleEqual}
        />
      </div>
    </div>
  );
}

export default App;
