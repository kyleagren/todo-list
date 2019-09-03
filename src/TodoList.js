import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [

      ]
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    let newList = this.state.todoList.map(todo => {
      if (todo.id === evt.target.id) {
        todo.isBeingEdited = false;
        return todo;
      } else {
        return todo;
      }
    })
    this.setState({todoList: newList});
  }

  addTodo(todo) {
    if (todo.task !== '')
    {
      this.setState(state => ({
        todoList: [...state.todoList, todo]
      }))
    } 
  }

  editTodo(key) {
    let newList = this.state.todoList.map(todo => {
      if (todo.id === key){
        todo.isBeingEdited = true;
      }
      return todo;
    });
    this.setState({todoList: newList});
  }

  removeTodo(key) {
    let newList = this.state.todoList.filter(todo => {
      return (todo.id !== key)
    });
    this.setState({todoList: newList});
  }

  render() {
    let todos = this.state.todoList.map(todo => {
      return <Todo
      key={todo.id}
      id={todo.id}
      task={todo.task}
      removeTodo={this.removeTodo}
      editTodo={this.editTodo}
      />
    
    });
    return (
      <div>
        {todos}
        <NewTodoForm addTodo={this.addTodo} />
      </div>
    )
  }
}

export default TodoList;