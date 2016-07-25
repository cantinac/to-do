import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./TodoList";

window.onload = function () {
  ReactDOM.render(
    <TodoList />,
    document.getElementById('to-do-app')
  );
};

