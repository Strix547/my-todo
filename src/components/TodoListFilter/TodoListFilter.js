import React, { Component } from 'react';

import './TodoListFilter.scss';

class TodoListFilter extends Component {
  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'important', label: 'Important' },
    { name: 'check', label: 'Check' },
  ];

  render() {
    const { onSetFilter, filter } = this.props;

    const buttons = this.buttons.map(({name, label}) => {
      const classNames = name === filter ? 'btn active' : 'btn';
      return (
        <button
          key={name}
          name={name}
          className={classNames}
          onClick={() => onSetFilter(name)}
        >
          {label}
        </button>
      );
    });

    return (
      <div className="item-filter">
        {buttons}
      </div>
    );
  }
}

export default TodoListFilter;