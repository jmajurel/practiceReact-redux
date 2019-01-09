import React, {Component} from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import { addTodo, removeTodo, getTodos } from './actionCreators';
import { Route } from 'react-router-dom'; 
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(val) {
    this.props.addTodo(val);
  }

  removeTodo(id){
    this.props.removeTodo(id);
  }

  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    debugger;
    const todos = this.props.todos.map(todo => (
      <Todo 
        removeTodo={this.removeTodo.bind(this, todo._id)}
	task={todo.task} 
	key={todo._id} />
    )); 

    return (
      <div>
        <Route 
	  path='/todos/new' 
	  component={props => (
	    <NewTodoForm {...props} handleSubmit={this.handleAddTodo} /> 
	  )} />
	<Route exact path='/todos' component={() => (<div>{todos}</div>)} />    
      </div>
    );
  }
}

function mapStateToProps(ReduxState){
  debugger;
  return {
    todos: ReduxState.todos
  }
}

export default connect(mapStateToProps, { addTodo, removeTodo, getTodos })(TodoList);
