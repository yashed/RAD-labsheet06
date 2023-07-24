import React from "react";

function Todolist() {
  const todo = [
    "Learn React",
    "Build a project",
    "Go for a walk",
    "Do some exercises",
    "Join a music class",
    "Read a novel",
  ];

  const li = todo.map((todolist) => <li>{todolist}</li>);

  return (
    <div>
      <ul>{li}</ul>
    </div>
  );
}

export default Todolist;
