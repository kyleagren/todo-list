import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			edited: this.props.task
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleRemoveClick = this.handleRemoveClick.bind(this);
		this.handleEditClick = this.handleEditClick.bind(this);
	}

	handleSubmit(evt) {
		evt.preventDefault();
		if (this.state.edited !== '') {
			this.props.editTodo(this.props.id, this.state.edited);
		} else {
			alert("You can't have an empty task, please delete it instead.");
			this.setState({ edited: this.props.task });
		}
	}

	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}

	handleEditClick(evt) {
		this.props.editTodo(this.props.id, this.props.task);
	}

	handleRemoveClick(evt) {
		this.props.removeTodo(this.props.id);
	}

	render() {
		if (this.props.isBeingEdited === true) {
			return (
				<form className="Todo" onSubmit={this.handleSubmit}>
					<input name="edited" type="text" value={this.state.edited} onChange={this.handleChange} />
					<button type="submit">Save</button>
				</form>
			);
		} else {
			return (
				<div className="Todo">
					<span>{this.props.task}</span>
					<div className="Todo-button-container">
						<button onClick={this.handleEditClick}>Edit</button>
						<button onClick={this.handleRemoveClick}>X</button>
					</div>
				</div>
			);
		}
	}
}

export default Todo;
