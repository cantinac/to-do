function todoadd() {
	var txtinput = document.getElementById("textinput");
    document.getElementById("place").style.backgroundColor = "white";
    document.getElementById("textinput").style.color = "black";
    todoNew = new objectTodo();
}

var counter = 0;
function objectTodo() {
    var todo = document.getElementById('textinput').value;
    var listItem = document.createElement("li");
    listItem.id = counter + "_li";
    var checkbox = document.createElement("input");
    checkbox.id = counter;
    checkbox.type = "checkbox";
    checkbox.onclick = deleteCheckBox;
    listItem.appendChild(checkbox);
    var itemTextContainer = document.createElement("span");
    itemTextContainer.id = counter + "_text";
    itemTextContainer.style.color = "#666";
    var itemText = document.createTextNode(todo);
    itemTextContainer.appendChild(itemText);
    listItem.appendChild(itemTextContainer);
    document.getElementById('place').appendChild(listItem);
    counter++;
}

function deleteCheckBox() {
    var ul = document.getElementById('place');
    var li = ul.children;
    var prefix = this.getAttribute("id");
    var myLi = document.getElementById(prefix + "_li");
    if (this.checked)
    {
		document.getElementById(prefix + "_text").style.color = "#ddd";
	}
	else
	{
		document.getElementById(prefix + "_text").style.color = "#666";
		document.getElementById("place").style.backgroundColor = "white";
		document.getElementById("textinput").style.color = "black";
	}
}
window.onload = resizeStuff;
window.onresize = resizeStuff;
function resizeStuff()
{
	var bgElem = document.getElementById("todoList");
	var txtBG = document.getElementById("textboxBackground");
	var txtinput = document.getElementById("textinput");
	var buttonText = document.getElementById("myButton");
	var docWidth = window.innerWidth;
	var rect = bgElem.getBoundingClientRect();
	var bgElemWidth = parseInt(rect.right - rect.left);
	if (bgElemWidth > 150)
	{
		var buttonBoundRect = document.getElementById("myButton").getBoundingClientRect();
		var buttonWidth = buttonBoundRect.right - buttonBoundRect.left;
		txtBG.style.width = (bgElemWidth) + "px";
		txtinput.style.width = (bgElemWidth - 85) + "px";
		console.log(txtinput.style.width);
	}
	if (docWidth <= 600) {
		document.getElementById("myButton").value = "+";
		txtBG.style.width = (bgElemWidth) + "px";
		txtinput.style.width = (bgElemWidth - 55) + "px";
	}
	if (docWidth > 600) {
		document.getElementById("myButton").value = "Add To-Do";
		txtBG.style.width = (bgElemWidth) + "px";
		txtinput.style.width = (bgElemWidth - 85) + "px";
	}
}

