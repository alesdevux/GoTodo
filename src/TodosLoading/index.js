import React from 'react';
import './TodosLoading.css';

function TodosLoading() {
  return (
    <React.Fragment>
      <div className="LoadingTodo"></div>
      <div className="LoadingTodo"></div>
      <div className="LoadingTodo"></div>
    </React.Fragment>
  );
}

export { TodosLoading };