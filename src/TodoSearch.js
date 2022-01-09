import React from "react";
import './TodoSearch.css';

function TodoSearch() {
  return (
    <input className="todoSearch" type="text" placeholder="Buscar tareas" />
  );
}

export { TodoSearch };