import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/helloworld";
import Counter from "./components/counter";
import Toggle from "./components/toggle";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="App">
      <h1>Welcome to My React App</h1>
      <p>This is my first react application</p>
      <Greeting />
      <Counter />
      <Toggle />
      <Timer />
    </div>
  );
}

export default App;
