addTodoItem = function (){
  //Get test from to-do input
  todoText = document.getElementById('new-item-input').value;
  //Create new to-do
  if (todoText.length != 0) {
    var targetElement = document.getElementById('todo-items');
    var div = document.createElement('div');
    div.innerHTML = '<input class="todo-checked" type="checkbox"><p>' + todoText + '</p>';
    div.setAttribute('class', 'todo-item');
    targetElement.appendChild(div);
  } else {
    alert("No Task to Create!");
  }
  //Reset input after new to-do created
  document.getElementById('new-item-input').value = "";
}
