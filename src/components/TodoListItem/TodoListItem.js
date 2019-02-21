import React from 'react';

import './TodoListItem.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck, faExclamation } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);
library.add(faCheck);
library.add(faExclamation);

const TodoListItem = (props) => {
  const { label, important, check, onDeleted, onToggleCheck, onToggleImportant} = props;

  let classNames = "item";

  if (important) {
    classNames += ' important';
  }
  if (check) {
    classNames += ' check';
  }
  return (
    <li className={classNames}>
      <h4>{label}</h4> 
      <div className="buttons">
        <button
          className="btn btn-delete"
          title="delete"
          onClick={onDeleted}
        >
          <FontAwesomeIcon
            className="icon"
            icon="trash"
            size="2x"
            color="#940000"
          />
        </button>
        <button
          className="btn btn-important"
          title="important"
          onClick={onToggleImportant}
        >
          <FontAwesomeIcon
            className="icon"
            icon="exclamation"
            size="2x"
            color="#ED7733"
          />
        </button>
        <button
          className="btn btn-check"
          title="check"
          onClick={onToggleCheck}
        >
          <FontAwesomeIcon
            className="icon"
            icon="check"
            size="2x"
            color="#009b00"
          />
        </button>
      </div>  
    </li>
  );
}

export default TodoListItem;
