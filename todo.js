/*Helper method to select IDs*/
function id(el){
    return document.getElementById(el);
}

var listArray = new Array(); 

/*Handle blur/focus/add to list events*/
id('todo_input_text').onfocus = function(){
    if(this.value == this.defaultValue){
        this.value ='';
        this.setAttribute("class", "text_focus");
    }
}
id('todo_input_text').onblur = function(){
    if(this.value == ''){
        this.value = this.defaultValue; 
        this.removeAttribute("class", "text_focus");
    }
}
id('todo_input_add').onmousedown = function(){
    addToDo(id('todo_input_text').value);
}
id('todo_input_text').onkeypress = function(e){
    if(e.keyCode == 13){
        addToDo(id('todo_input_text').value);
    }
}

/* portrait/landscape methods */
checkOrientation();
window.addEventListener("orientationchange", function(){
    checkOrientation();
}, false);

function checkOrientation(){
    if(!window.orientation){
        id('todo_input_add').innerHTML = "+";
    }else{
        id('todo_input_add').innerHTML = "Add To-do";
    }
}

if(window.innerWidth > 640){
    id('todo_input_add').innerHTML = "Add To-do";
}


/* Add List item to list container and create appropriate elements -- keep items in an array in case save functionality */
var listInt = 0;
function addToDo(val){
    console.log( val !== id('todo_input_text').defaultValue || val !== '');
    if(val == '' || val == id('todo_input_text').defaultValue){
        id('todo_input_text').value = id('todo_input_text').defaultValue;
        id('todo_input_text').removeAttribute("class", "text_focus");
        id('todo_input_text').blur();
    }else{
        listArray.push(val)
        id('todo_input_text').value = id('todo_input_text').defaultValue;
        id('todo_input_text').removeAttribute("class", "text_focus");
        id('todo_input_text').blur();

        var el = document.createElement('div');
            el.setAttribute('class', 'todo_item');
        var elIn = document.createElement('input');
            elIn.setAttribute('id', 'todo'+listInt);
            elIn.setAttribute('class', 'todo_check');
            elIn.setAttribute('type', 'checkbox');
        var elLb = document.createElement('label');
            elLb.setAttribute('class', 'todo_label');
            elLb.setAttribute('for', 'todo'+listInt);
            elLb.innerHTML = listArray[listInt];

        el.appendChild(elIn);
        el.appendChild(elLb);
        id('todo_list').appendChild(el);

        listInt++;
    }
}
