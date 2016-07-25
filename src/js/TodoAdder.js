import React from "react";

export default React.createClass({
  propTypes: {
    onAddTodo: React.PropTypes.func
  },

  getInitialState: function () {
    return {
      text: ""
    };
  },
  
  handleTyping: function (e) {
    this.setState({
      text: e.target.value
    });
  },
  
  handleAddTodoClick () {
    this.props.onAddTodo(this.state.text);
    this.setState({
      text: ""
    });
  },

  render: function () {
    return(
      <div className="input-group">
        <input type="text" className="form-control col-md-3" placeholder="What do you need to get done?" onChange={this.handleTyping} value={this.state.text} />
        <span className="input-group-btn">
          <button className="hidden-xs hidden-sm btn btn-default add-to-do" type="button" onClick={this.handleAddTodoClick}>Add To-do</button>
          <button className="hidden-md hidden-lg btn btn-default add-to-do" type="button" onClick={this.handleAddTodoClick}>+</button>
        </span>
      </div>
    );
  }
});


