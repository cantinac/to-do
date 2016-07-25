import React from "react";
import Todo from "./Todo";
import TodoAdder from "./TodoAdder";

export default React.createClass({
  getInitialState: function () {
    return {
      todos: []
    };
  },
  
  addTodo: function (todo) {
    if(todo === "") {
      return;
    }
    // Avoid modifying state variables directly
    var newTodos = this.state.todos.slice(0);
    newTodos.push(todo);
    
    this.setState({
      todos: newTodos
    });
  },
  
  render: function () {
    return(
      <div>
        <TodoAdder onAddTodo={this.addTodo} />
        {this.state.todos.map(function (todo, key) {
          return <Todo key={key} name={todo} />
       })}
    </div>
    );
  }
});

