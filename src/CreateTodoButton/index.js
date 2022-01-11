import React from "react";
import { TodoContext } from "../TodoContext";
import './CreateTodoButton.css';

function CreateTodoButton() {
  const {openModal, setOpenModal} = React.useContext(TodoContext);

  const onClickButton = () => {
    setOpenModal(!openModal);
  };

  return (
    <button 
      className="createTodoButton"
      onClick={onClickButton}
    >
      {openModal ? 'x' : '+'}
    </button>
  );
}

export { CreateTodoButton };