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
            <div style={this.getStyle(completed)}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/> {' '}
                    {title}
                </p>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo:PropTypes.object.isRequired
}

export default TodoItem