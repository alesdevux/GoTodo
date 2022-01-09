import React from "react";
// import './App.css';

const todos = [
  {text: 'Learn React', completed: false},
  {text: 'Learn Redux', completed: false},
  {text: 'Learn Next.js', completed: false},
]

function App(props) {
  return (
    <React.Fragment>
      {/* <TodoCounter /> */}
      {/* <TodoSearch /> */}
      {/* <TodoList> */}
        {/* {todos.map(todo => ( */}
          {/* <TodoItem key={todo.text} todo={todo} /> */}
        {/* ))} */}
      {/* </TodoList> */}
      {/* <CreateTodoButton /> */}
    </React.Fragment>
  );
}

export default App;
