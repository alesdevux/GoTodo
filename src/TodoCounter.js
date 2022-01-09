import React from "react";
import './TodoCounter.css';

function TodoCounter() {
  return (
    <React.Fragment>
      <h1 className="TodoName">🦄 Go TODO 🎉</h1>
      <h2 className="TodoCounter">Tienes 2 de 3 TODOs completados</h2>
    </React.Fragment>
  );
}

export { TodoCounter };