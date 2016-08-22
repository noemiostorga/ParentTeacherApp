import React from 'react';
import { login } from 'api/api';

export default React.createClass({
	getInitialState: function(){
		return {
			username:'peggyhill',
			password:'123'
		}
	},

  handleChange: function(e){
  	var newState = Object.assign({}, this.state);
  	newState[e.target.name] = e.target.value;
  	this.setState(newState);
  },
  handleSubmit: function(e){
  	e.preventDefault();
  	
  	login(this.state.username, this.state.password);

  },
  render: function () {
    return (
      <form onSubmit={this.handleSubmit}>
      	<input placeholder="username" value={this.state.username} onChange={this.handleChange}/><br/>
      	<input placeholder="password"  value ={this.state.password} onChange={this.handleChange}/><br/>
      	<button type="submit">Submit</button>
      </form>
    )
  }
})