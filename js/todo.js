

MyTodo = function() {

  var submitBtn = document.getElementById('submit'),
      mainInput = document.getElementById('mainInput'),
      mainList  = document.getElementById('mainList');
 

  function attachEventHandlers(){
    submitBtn.onclick = addEntry;
  }

  function checkLocal() {

    if (localStorage.getItem('myTodo') !== null){

      var newData = JSON.parse(localStorage.getItem('myTodo'));

      for (index = 0; index < newData.length; index++) {
        addEntry(true, newData[index]);
      }

    }
  }

  function addEntry(isStorage, item){
    var newLi = document.createElement('li'),
        checkbox = document.createElement('input'),
        todoText;

    if (isStorage === true || mainInput.value !== ''){

      checkbox.type = checkbox.className = 'checkbox';

      if (isStorage === true){
        todoText = document.createTextNode(item.text);

        if (item.completed){
          checkbox.checked = true;
          newLi.className = 'completed';
        }
      }
      else{
        todoText = document.createTextNode(mainInput.value);
        mainInput.value = '';
      }

      checkbox.onclick = updateCheckbox;

      newLi.appendChild(checkbox);
      newLi.appendChild(todoText);
      mainList.insertBefore(newLi, mainList.firstChild);
    }

    updateLocal();

  }

  function updateLocal() {

    console.log('updateLocal()');
    
    var newArr  = [],
        items   = mainList.getElementsByTagName('li');

    for (i = 0; i < items.length; i++){

      var obj       = {},
          thisItem  = items[i];

      console.log(thisItem.className === 'completed')
      obj.completed = thisItem.className === 'completed';
      obj.text = thisItem.textContent;
      newArr.unshift(obj);

    }

    console.log(newArr);
    localStorage.setItem('myTodo', JSON.stringify(newArr));

  }

  function updateCheckbox(e) {
    var thisCheckbox = e.target;
    console.log(thisCheckbox.checked);

    if (thisCheckbox.checked)
      thisCheckbox.parentNode.className = 'completed';
    else
      thisCheckbox.parentNode.className = '';

    updateLocal();

  }

  return {

    init: function() {
      attachEventHandlers();
      checkLocal();
    }
  }

}();

window.onload = MyTodo.init();