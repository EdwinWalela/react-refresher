import React, {Component} from 'react';
import PropTypes from 'prop-types';

import '../App.css';

class TodoItem extends Component{

    getStyle = (todo) => {
        return {
            margin:'auto',
            padding:'15px',
            textDecoration: todo.completed ? 'line-through' : 'none',
            background: '#f4f4f4',
            borderBottom:'1px #ccc dotted'
        }
    }

    render(){
        let todo = this.props.todo;
        return(
            <div style={this.getStyle(todo)}>
                <p>{todo.title}</p>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo:PropTypes.object.isRequired
}

export default TodoItem