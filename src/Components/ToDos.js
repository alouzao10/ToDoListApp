import React, { Component } from 'react';

class ToDos extends Component {
	render() {
		return (
			<div className='todolist'>
				{this.props.toDos.map((item) => (
					<div key={item.id} className={'todoitem ' + (item.done ? 'done' : '')}>
						<div className='todoitem__title' onClick={this.props.toggleDone.bind(this, item.id)}>
							{item.title}
						</div>
						<div className='todoitem__remove' onClick={this.props.removeToDo.bind(this, item.id)}>
							REMOVE
						</div>
					</div>
				))}
			</div>
		);
	}
}

export default ToDos;
