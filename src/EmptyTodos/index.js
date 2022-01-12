import React from 'react';
import './EmptyTodos.css';
import {TodoIcon} from '../TodoIcon';

function EmptyTodos() {
  return (
    <div className="EmptyTodos">
      <p>¡Crea tu primer TODO!</p>
      <TodoIcon type="tasks" color="rgba(242, 242, 242, 0.03)" />
    </div>
  );
}

export { EmptyTodos };