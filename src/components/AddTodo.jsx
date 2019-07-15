import React, { Component }  from 'react';

class AddTodo extends Component{

    state = {
        title : ''
    }

    onChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.handleNewTodo(this.state.title)
    }


    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    name="title"
                    placeholder="Add Todo ..."
                    value={this.state.title}
                    onChange={this.onChange}
                    style={inputStyle}
                />
                <input
                    type="submit"
                    value="Add"
                    style={btnStyle}
                   
                />
            </form>
        )
    }
}

const btnStyle = {
    padding:'12px',
    width:'20%',
    border:'none',
    color:'#fff',
    background:'#555'
}

const inputStyle = {
    padding:'10px',
    width:'80%'
}

export default AddTodo;