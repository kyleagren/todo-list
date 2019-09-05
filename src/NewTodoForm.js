import React, { Component } from 'react';
import uuid from 'uuid/v4';
import './NewTodoForm.css';

class NewTodoForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			task: '',
			id: uuid(),
			isBeingEdited: false
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}

	handleSubmit(evt) {
		evt.preventDefault();
		this.props.addTodo(this.state);
		this.setState({ task: '', id: uuid() });
	}

	render() {
		return (
			<form className="NewTodoForm" onSubmit={this.handleSubmit}>
				<div>
					<input
						type="text"
						placeholder="Enter new todo here"
						name="task"
						value={this.state.task}
						onChange={this.handleChange}
						autoComplete="off"
					/>
				</div>
				<button>Submit</button>
			</form>
		);
	}
}

export default NewTodoForm;
