import React, {Component} from 'react';
import PropTypes from 'prop-types';

import '../App.css';

class TodoItem extends Component{
    render(){
        let todo = this.props.todo;
        return(
            <div>
                <p>{todo.id}</p>
                <p>{todo.title}</p>
                <p>{todo.completed}</p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo:PropTypes.object.isRequired
}

export default TodoItem