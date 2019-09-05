import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todoList: []
		};
		this.addTodo = this.addTodo.bind(this);
		this.editTodo = this.editTodo.bind(this);
		this.removeTodo = this.removeTodo.bind(this);
	}

	addTodo(todo) {
		if (todo.task !== '') {
			this.setState((state) => ({
				todoList: [ ...state.todoList, todo ]
			}));
		}
	}

	editTodo(key, taskName) {
		let newList = this.state.todoList.map((todo) => {
			if (todo.id === key) {
				todo.isBeingEdited = !todo.isBeingEdited;
				todo.task = taskName;
			}
			return todo;
		});
		this.setState({ todoList: newList });
	}

	removeTodo(key) {
		let newList = this.state.todoList.filter((todo) => {
			return todo.id !== key;
		});
		this.setState({ todoList: newList });
	}

	render() {
		let todos = this.state.todoList.map((todo) => {
			return (
				<Todo
					key={todo.id}
					id={todo.id}
					task={todo.task}
					isBeingEdited={todo.isBeingEdited}
					removeTodo={this.removeTodo}
					editTodo={this.editTodo}
				/>
			);
		});
		return (
			<div className="TodoList">
				{todos}
				<NewTodoForm addTodo={this.addTodo} />
			</div>
		);
	}
}

export default TodoList;
