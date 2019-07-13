import React, {Component} from 'react';
import PropTypes from 'prop-types';

import '../App.css';

class TodoItem extends Component{

	getStyle = (completed) => {
		return {
			margin:'auto',
			padding:'15px',
			textDecoration: completed ? 'line-through' : 'none',
			background: '#f4f4f4',
			borderBottom:'1px #ccc dotted'
		}
	}

	render(){
		const { id, title,completed} = this.props.todo;
		return(
			<div style={this.getStyle(completed)} onClick={this.props.markComplete.bind(this,id)}>
				<p>
					{title} {' '}
					<button style={btnStyle} onClick={this.props.deleteItem.bind(this,id)}> x </button>
				</p>
			</div>
		)
	}
}

// PropTypes
TodoItem.propTypes = {
	todo:PropTypes.object.isRequired
}

const btnStyle = {
	background: 'red',
	color:'#fff',
	padding:'5px 8px',
	border:'none',
	borderRadius:'50%',
	cursor:'pointer',
	float:'right'
}

export default TodoItem