import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/helloworld";
import Counter from "./components/counter";
import Toggle from "./components/toggle";
import Timer from "./components/Timer";
import Todolist from "./components/todolist";
import CardList from "./components/cardlst";
import Form from "./components/form";

function App() {
  return (
    <div className="App">
      <h1>Welcome to My React App</h1>
      <p>This is my first react application</p>
      <Greeting />
      <div>
        <h2>Activity 1 </h2>
        <Counter />
      </div>
      <div>
        <h2>Activity 2 </h2>
        <Toggle />
      </div>
      <div>
        <h2>Activity 3 </h2>
        <Timer />
      </div>
      <div>
        <h2>Activity 4</h2>
        <h3> Todo List </h3>
        <Todolist />
      </div>
      <div>
        <h2>Activity 5</h2>
        <h3>Cards </h3>
        <CardList />
      </div>
      <div>
        <h2>Activity 6</h2>
        <h3>Enter a input</h3>
        <Form />
      </div>
    </div>
  );
}

export default App;
