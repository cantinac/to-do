var todo = {
	todoList: {},
	templateHTML: [],
	addEntry: function(e){
		e.preventDefault();
		this.todoTxt = this.inputEl.value.trim() || '' ;

		// if the input is empty, get out
		if (this.todoTxt === ''){ 
			return 
		} else if (this.existsAlready(this.todoTxt)){
			// show a duplicate alert
			this.warning.classList.remove('hidden');
		} else {
			// hide the alert
			this.hideAlert(e);

			// add this to-do to the storage obj 
			this.todoList[this.todoTxt] = { done: false };
		}

		// rerender the list
		this.renderList.call(this);
	},
	existsAlready: function(txt){
		// check if it's already in the model
		if (this.todoList[txt]){
			return true;
		} else {
			return false;
		}
	},
	markDone: function(e){
		// get item text
		var txt = e.target.nextSibling.data; 

		// update the model
		if (e.target.checked){
			this.todoList[txt].done = true;
		} else {
			this.todoList[txt].done = false;
		}

		// rerender the view
		this.renderList.call(this);
	}, 
	hideAlert: function(e){
		e.preventDefault();
		this.warning.classList.add('hidden');
	},
	renderList: function(){

		// empty the template array
		this.templateHTML.length = 0;

		// build the array
		for (key in this.todoList){
			var str = '';
			var doneCheck = '';
			var doneClass = '';

			if (this.todoList[key].done){
				doneCheck = 'checked';
				doneClass = 'completed';
			}

			str += '<div class="checkbox"><label class="' + doneClass + '"><input type="checkbox" ' + doneCheck + '>' + key + '</label></div>';
			this.templateHTML.push(str);
		}

		// replace list with this array
		this.list.innerHTML = this.templateHTML.join('');
		this.inputEl.value = '';
	},
	init: function(){
		// cache elements 
		todo.addForm = document.getElementById('addForm');
		todo.inputEl = document.getElementById('addTodo');
		todo.addBtn = document.getElementById('addBtn');
		todo.list = document.getElementById('todoList');
		todo.warning = document.getElementById('dupeAlert');
		todo.check = todo.list.querySelectorAll('input[type=checkbox]');

		// bind events 
		todo.addForm.addEventListener('submit', todo.addEntry.bind(todo));
		todo.addBtn.addEventListener('click', todo.addEntry.bind(todo));
		todo.warning.addEventListener('click', todo.hideAlert.bind(todo));

		// event delegation for the checkboxes
		document.addEventListener('click', function(e){
			if (e.target && e.target.tagName == "INPUT" && e.target.type == 'checkbox'){
				todo.markDone.call(todo, e);
			}
		});

		// cue the user

		return {
			todo: todo
		}
	}
}

function ready(fn) {
    document.addEventListener('DOMContentLoaded', fn);
}


ready(todo.init);