import React, { Component } from 'react';

import './ItemAddForm.scss';

class ItemAddForm extends Component {
  state = {
    label: ''
  }
  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: ''
    });
  }
  render() {
    return (
      <form
        className="add-form"
        onSubmit={this.onSubmit}
      >
        <input
          type="text"
          name="input-add"
          placeholder="item name" 
          onChange={this.onLabelChange}
          value={this.state.label}
        />
        <button className="btn btn-add">Add</button>
      </form>
    );
  }
}

export default ItemAddForm;