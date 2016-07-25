import React from "react";

export default React.createClass({
  propTypes: {
    name: React.PropTypes.string
  },

  getInitialState: function () {
    return {
      completed: false
    }
  },
  
  toggleCompleted: function () {
    this.setState({
      completed: !this.state.completed
    });
  },
  
  render: function () {
    if(this.state.completed) {
      return(
        <div className="to-do-container">
          <input type="checkbox" onClick={this.toggleCompleted} />
          <div className="to-do complete">{this.props.name}</div>
        </div>);
    } else {
      return( 
        <div className="to-do-container">
          <input type="checkbox" onClick={this.toggleCompleted} />
          <div className="to-do">{this.props.name}</div>
        </div>);
    }
  }
});

