import React, { Component } from 'react';

import '../../fonts/roboto.css';
import './App.scss';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoListFilter from '../TodoListFilter';
import TodoList from '../TodoList';
import ItemAddForm from '../ItemAddForm';

export default class App extends Component {
  id = 0;

  state = {
    todoData: [
      this.createItem('Get job'),
      this.createItem('Learn english'),
      this.createItem('Wash plates')
    ],
    filter: 'all',
    search: ''
  };

  createItem(label) {
    return {
      id: this.id++,
      label,
      important: false,
      check: false
    }
  }

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: todoData.filter(item => item.id !== id)
      };
    });
  }

  addItem = (label) => {
    this.setState(({todoData}) => {
      todoData.push(this.createItem(label));
      return {
        todoData
      }
    });
  }

  ToggleCheck = (id) => {
    this.setState(({todoData}) => {
      todoData.map(item => {
        return item.id === id ? item.check = !item.check : item;
      });

      return {
        todoData
      };
    });
  }

  ToggleImportant = (id) => {
    this.setState(({todoData}) => {
      todoData.map(item => {
        return item.id === id ? item.important = !item.important : item;
      });

      return {
        todoData
      };
    });
  }

  onFilterChange = filter => {
    this.setState({
      filter
    });
  }

  onSearchChange = text => {
    this.setState({
      search: text
    });
  }
  
  filterList = (list, filter) => {
    return list.filter(item => {
      switch(filter) {
        case 'active':
          return !item.check;
        case 'important':
          return item.important;
        case 'check':
          return item.check;
        default:
          return item;
      }
    }); 
  }
  searchInList = (list, search) => {
    return list.filter(({label}) => {
      return label.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  }
  render() {
    const { todoData, filter, search } = this.state;
    const filteredList = this.filterList(todoData, filter);
    const visibleList = this.searchInList(filteredList, search);
    return (
      <main>
        <AppHeader />
        <SearchPanel onSearchChange={(text) => this.onSearchChange(text)} />
        <TodoListFilter
          filter={filter}
          onSetFilter={(filter) => {this.onFilterChange(filter)}} 
        />
        <TodoList
          todoList={visibleList}
          onDeleted={(id) => this.deleteItem(id)}
          onToggleImportant={(id) => this.ToggleImportant(id)}
          onToggleCheck={(id) => this.ToggleCheck(id)}
        />
        <ItemAddForm onItemAdded={(label) => this.addItem(label)} />
      </main>
    );
  }
}