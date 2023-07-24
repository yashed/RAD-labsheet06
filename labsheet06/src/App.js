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
        <h4>Activity 1 </h4>
        <Counter />
      </div>
      <div>
        <h4>Activity 2 </h4>
        <Toggle />
      </div>
      <div>
        <h4>Activity 3 </h4>
        <Timer />
      </div>
      <div>
        <h4>Activity 4</h4>
        <h3> Todo List </h3>
        <Todolist />
      </div>
      <div>
        <h4>Activity 5</h4>
        <h3>Cards </h3>
        <CardList />
      </div>
      <div>
        <h4>Activity 6</h4>
        <h3>Enter a input</h3>
        <Form />
      </div>
    </div>
  );
}

export default App;
