import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = (mensaje) => {
    alert(mensaje);
  };

  return (
    <button 
      className="createTodoButton"
      onClick={() => onClickButton('Abierto futuro modal')}
    >
      +
    </button>
  );
}

export { CreateTodoButton };