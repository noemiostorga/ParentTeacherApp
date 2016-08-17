import React from 'react';


export default React.createClass({
  render: function () {
    return (
      <form>
      	<input placeholder="username"/><br/>
      	<input placeholder="password"/><br/>
      	<button>Submit</button>
      </form>
    )
  }
})