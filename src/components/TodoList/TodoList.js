import React from 'react';

import './TodoList.scss';
import TodoListItem from '../TodoListItem';

const TodoList = (
    {todoList, onDeleted, onToggleCheck, onToggleImportant}
  ) => {
  const list = todoList.map(({id, ...props}) => {
    return (
      <TodoListItem
        key={id}
        onDeleted={() => onDeleted(id)}
        onToggleCheck={() => onToggleCheck(id)}
        onToggleImportant={() => onToggleImportant(id)}
        {...props}
      />
    );
  });
  return (
    <ul className="todo-list">
      { list }
    </ul>
  );
}

export default TodoList;