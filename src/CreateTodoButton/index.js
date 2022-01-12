import React from "react";
import { TodoContext } from "../TodoContext";
import './CreateTodoButton.css';
import {TodoIcon} from "../TodoIcon";

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
      {openModal ? 
        <TodoIcon type="close" /> :
        <TodoIcon type="plus" />
      }
    </button>
  );
}

export { CreateTodoButton };