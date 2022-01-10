import React from "react";
import './TodoCounter.css';

function TodoCounter({completed, total}) {
  return (
    <React.Fragment>
      <h1 className="TodoName">🦄 Go TODO 🎉</h1>
      <h2 className="TodoCounter">Tienes completado {completed} de {total} TODOs</h2>
    </React.Fragment>
  );
}

export { TodoCounter };