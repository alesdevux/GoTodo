import React from "react";
import './TodoCounter.css';

function TodoCounter({completed, total, percent}) {
  return (
    <React.Fragment>
      <h1 className="TodoName">🦄 Go TODO 🎉</h1>
      <h2 className="TodoCounter">Tienes completado {completed} de {total} TODOs <em>- {percent}%</em></h2>
    </React.Fragment>
  );
}

export { TodoCounter };