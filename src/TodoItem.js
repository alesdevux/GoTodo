import React from "react";
import './TodoItem.css';

function TodoItem(props) {
  const onComplete = () => {
    alert('You have completed ' + props.text);
  };
  const onDelete = () => {
    alert('You have deleted ' + props.text);
  };

  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={onComplete}
      >
        C
      </span>
      <p
        className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}
        onClick={onComplete}
      >
        {props.text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={onDelete}
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };