// JavaScript Document

//this is called when the add task btn is clicked
function addtask()
{
//grabs the user genrated task txt
taskname = document.getElementById("addtask").value;	

//If the user did not input txt the function ends
if(taskname =="")
{
	return false;
}

//blanks the user input txt box for next time
document.getElementById("addtask").value = "";

//creates a new li
var task=document.createElement("LI");
//assigns it li task class
task.className = "task";

//creates a new checkbox
var checkbox = document.createElement('input');
checkbox.type = "checkbox";
//assigns the checked onchange function 
checkbox.onchange=checked;
//adds the checkbox to the new task li 
task.appendChild(checkbox);
//creates a new div for task txt
var tasktxt = document.createElement("DIV")
//assigns it the default not done class
tasktxt.className = "notdone";
//creates a new text node
var textnode=document.createTextNode(taskname);
//adds text node to the new not done div 
tasktxt.appendChild(textnode);
//adds tasktxt div to the new task
task.appendChild(tasktxt);

//adds task li to the existing tasks ul
document.getElementById("tasks").appendChild(task);
}


//called when checkbox is changed
function checked(){
//gets selected box's parent li
taskli = this.parentNode;

//gets the class name of the text div in the same li as the selected box
tasktxtclass = taskli.children[1].className;

//if the class name is the default not done then it will change to done and vice versa 
	if (tasktxtclass == "notdone")
	{
		taskli.children[1].className = "done";
	}
	
	else
	{
		taskli.children[1].className = "notdone";
	}
}
