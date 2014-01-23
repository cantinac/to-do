var Todo = {
	init: function() {
		this.cacheElements();
	},
	cacheElements: function() {
		this.$addButton = document.getElementById("add-button");
		this.$input = document.getElementById("to-do-input");
		this.$list = document.getElementById("to-do-list");
		this.$todocheck = document.getElementsByClassName("to-do-check");
		this.bindEvents();
	},
	bindEvents: function() {
		Todo.$addButton.onclick = function() {
			var newItem, length, newBox;
			newItem = Todo.$input.value;
			Todo.$input.value = "";
			length = document.getElementsByClassName("to-do-check").length;
			Todo.$list.innerHTML += ("<li class='active'><input id='td-" + (length) + "' type='checkbox' class='to-do-check'> <span>" + newItem + "</span></li>");
			newBox = document.getElementById("td-" + length);
			newBox.onclick = function() {
				var that = this;
				TodoUtilities.changeCheckClass(that);
			}
		};
		for (var i = 0; i < Todo.$todocheck.length; i++ ) {
			check = Todo.$todocheck[i];
			check.onclick = function() {
				var that = this;
				TodoUtilities.changeCheckClass(that);
			}
		}
	}
};
var TodoUtilities = {
	changeCheckClass: function(that) {
		if (that.parentNode.className === 'active') {
			that.parentNode.className = "";
			that.parentNode.className = "inactive";
			that.setAttribute("checked", "true");
		}
		else {
			that.parentNode.className = "active";
			that.attr("checked", "checked");
			checkbox.setAttribute("checked", "false");
		}
	}
}
window.onload = function() {
	Todo.init();
}
