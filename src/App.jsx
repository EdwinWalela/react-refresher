import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Axios from 'axios';
import uuid from 'uuid'

import './App.css';

import Todos from './components/Todos';
import Header from './components/layout/Header.jsx';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';


class App extends Component{

	state = {
		todos:[
			
		]
	}

	componentWillMount() {
		Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=4')
			.then(todos=>{
				this.setState({
						todos:todos.data
					})
				})
	}

	// Toggle Complete
	markComplete = (id) => {
		this.setState({
			todos: this.state.todos.map(todo =>{
				if(todo.id === id){
					todo.completed = !todo.completed
				}
				return todo;
			})
		})
	}

	// Delete Item
	deleteItem = (id) => {
		this.setState({
			todos: this.state.todos.filter(todo=>{
					return todo.id != id
			})
		})
	}
	
	handleNewTodo = (title) =>{
		// Create new todo and post the data
		Axios.post('https://jsonplaceholder.typicode.com/todos',{
			title,
			completed:false
		})
		.then(res=>{
			// responds with the data created
			this.setState({
				todos: [...this.state.todos,res.data]
			})
		})
		
	}

	render(){
		return (
			<Router>
				<div className="App">
					<Header />
					<Route 
						exact path = "/" 
						render = {props=>(
							<React.Fragment>
								<AddTodo 
									handleNewTodo = {this.handleNewTodo}
								/>
								<Todos
									todos = {this.state.todos}
									markComplete = {this.markComplete}
									deleteItem = {this.deleteItem}
								/>	
							</React.Fragment>
						)}
					/>
					<Route
						path="/about"
						component={About}
					/>
				</div>
			</Router>
		);
	}
}

export default App;
