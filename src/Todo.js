import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBeingEdited: false,
    }
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
  }

  handleEditClick(evt) {
    this.props.editTodo(this.props.id);
  }

  handleRemoveClick(evt) {
    this.props.removeTodo(this.props.id);
  }

  render() {
    if (this.state.isBeingEdited === true) {
      return (
        <form onSubmit={this.handleSubmit}>
          <input 
          name='edit-button' 
          type='text'
          placeholder={this.props.task}
          />
          <button type='submit'>OK</button>
          <button type='submit'>X</button>
        </form>
      )
    } else {
      return (
        <div className="Todo">
            <span>{this.props.task}</span>
            <button onClick={this.handleEditClick}>Edit</button>
            <button onClick={this.handleRemoveClick}>X</button>
        </div>
      )
    }
  }
}

export default Todo;