import React from "react";
import './TodoCounter.css';

function TodoCounter() {
  return (
    <React.Fragment>
      <h1 className="TodoName">🦄 Go TODO 🎉</h1>
      <h2 className="TodoCounter">Tienes 1 de 3 TODOs completado</h2>
    </React.Fragment>
  );
}

export { TodoCounter };