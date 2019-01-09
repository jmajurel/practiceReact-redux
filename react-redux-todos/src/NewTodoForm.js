import React, {Component} from 'react';

export default class NewTodoForm extends Component {

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.state = {
      task: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state.task);
    e.target.reset();
    this.props.history.push('/todos');
  }

  handleUpdate(e) {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  render() {
    return (
      <form 
	onChange={this.handleUpdate}
	onSubmit={this.handleSubmit}>
	<label htmlFor='task'>Task </label>
	<input type='text' id='task' name='task'/>
	<button>Add Todo</button>
      </form>
    );
  }
}
