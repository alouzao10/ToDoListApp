import React, { Component } from 'react';
import './App.css';

import Navbar from './Components/Navbar';
import ToDos from './Components/ToDos';

class App extends Component {
	state = {
		toDos: [
			{
				id: 0,
				title: 'Content',
				done: false
			},
			{
				id: 1,
				title: 'Content 2',
				done: true
			}
		]
	};

	addItem = (item) => {
		let toDos = this.state.toDos;
		toDos.push({ id: this.state.toDos.length, title: item, done: false });
		this.setState({ toDos });
	};

	toggleDone = (id) => {
		console.log(id);
		this.setState({
			toDos: this.state.toDos.map((todo) => {
				if (todo.id === id) {
					todo.done = !todo.done;
				}
				return todo;
			})
		});
	};

	removeToDo = (id) => {
		this.setState({
			toDos: this.state.toDos.filter((todo) => todo.id !== id)
		});
	};

	render() {
		return (
			<div>
				<Navbar addItem={this.addItem} />
				<ToDos toDos={this.state.toDos} toggleDone={this.toggleDone} removeToDo={this.removeToDo} />
			</div>
		);
	}
}

export default App;
