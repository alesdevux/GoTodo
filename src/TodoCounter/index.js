import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
    percentCompletedTodos,
  } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <h1 className="TodoName">🦄 Go TODO 🎉</h1>
      <h2 className="TodoCounter">Tienes completado {completedTodos} de {totalTodos} TODOs <em>- {percentCompletedTodos}%</em></h2>
    </React.Fragment>
  );
}

export { TodoCounter };