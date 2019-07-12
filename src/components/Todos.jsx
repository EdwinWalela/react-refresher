import React, { Component } from "react";
import TodoItem from '../components/TodoItem';
import PropTypes from 'prop-types';

import '../App.css';

class Todos extends Component{
    render(){
        return this.props.todos.map((todo)=>(
            <TodoItem key={todo.id} todo={todo} />
        ))
    }
}

// PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;