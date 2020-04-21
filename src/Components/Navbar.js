import React, { Component } from 'react';

class Navbar extends Component {
	state = {
		newItem: ''
	};

	addItem = () => {
		if (this.state.newItem !== '') {
			this.props.addItem(this.state.newItem);
			this.setState({ newItem: '' });
		}
		//console.log(e.target.value);
	};

	updateItem = (e) => {
		this.setState({ newItem: e.target.value });
	};

	render() {
		return (
			<div>
				<header style={css.header}>
					<h1 style={css.title}>
						ToDo <span style={css.light}>List</span>
					</h1>
				</header>
				<div style={css.inputBar}>
					<input
						value={this.state.newItem}
						onChange={this.updateItem}
						style={css.input}
						type='text'
						placeholder='Enter ToDo...'
					/>
					<button onClick={this.addItem} style={css.addBtn}>
						ADD
					</button>
				</div>
			</div>
		);
	}
}

// A way to include CSS within the JS file
const css = {
	header: {
		backgroundColor: '#171717',
		padding: '1em',
		color: 'white',
		textAlign: 'center',
		textTransform: 'uppercase'
	},
	title: {
		color: '#FFCE00'
	},
	light: {
		color: '#F3F3F3',
		fontWeight: '300'
	},
	inputBar: {
		display: 'flex',
		height: '3.5em'
	},
	input: {
		flex: 10,
		padding: '0',
		margin: '0',
		fontSize: '1.8em',
		border: 'none',
		borderBottom: '3px solid #FFCE00',
		textIndent: '0.5em'
	},
	addBtn: {
		flex: '2',
		fontSize: '1.15em',
		backgroundColor: '#FFCE00',
		border: 'none',
		outline: 'none',
		cursor: 'pointer'
	}
};

export default Navbar;
