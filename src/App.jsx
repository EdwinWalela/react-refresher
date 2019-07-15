import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header.jsx';
import AddTodo from './components/AddTodo';

class App extends Component{

	state = {
		todos:[
			{
				id:1,
				title: 'Take out the trash',
				completed:false
			},
			{
				id:2,
				title: 'Dinner with wife',
				completed:false
			},
			{
				id:3,
				title: 'Meeting with client',
				completed:false
			}
		]
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

	// Deletw Item
	deleteItem = (id) => {
		this.setState({
			todos: this.state.todos.filter(todo=>{
					return todo.id != id
			})
		})
	}
	
	handleNewTodo = (title) =>{
		const newTodo = {
			id:4,
			title,
			completed:false
		}
		this.setState({
			todos: [...this.state.todos,newTodo]
		})
	}

	render(){
		return (
			<div className="App">
				<Header />
				<AddTodo 
					handleNewTodo = {this.handleNewTodo}
				/>
				<Todos
					todos = {this.state.todos}
					markComplete = {this.markComplete}
					deleteItem = {this.deleteItem}
				 />
			</div>
		);
	}
}

export default App;
