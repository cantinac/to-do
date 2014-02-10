
function AddListItem() {
    var userText = document.getElementById('entry-box').value;

    if (userText != '') {
        var toDoList = document.getElementById('the-list');
        var newListItem = document.createElement('li');
        var newCheckbox = document.createElement('input');
        newCheckbox.type = "checkbox";
        newCheckbox.setAttribute('onclick', 'CompletedTask(this);');
        var newParagraph = document.createElement('p');
        newParagraph.innerHTML += userText;

        newListItem.appendChild(newCheckbox);
        newListItem.appendChild(newParagraph);

        if (document.getElementById('initial-item'))
            document.getElementById('initial-item').remove();
        toDoList.insertBefore(newListItem, toDoList.firstChild);
        ClearInput();
    }
}

function ClearInput() {
    var box = document.getElementById('entry-box');
    box.value = '';
    box.removeAttribute('class');
}

function CompletedTask(box) {
    var listItem = box.parentNode;
    listItem.setAttribute('class', 'done');
}

function ButtonShift() {
    if (window.innerWidth <= 600) {
        document.getElementById('add-button').value = 'X';
    }
    else {
        document.getElementById('add-button').value = 'Add To-do';
    }
}

window.onload = function(event) {

    ButtonShift();
    window.onresize = ButtonShift;

    var enterButton = document.getElementById('add-button');
    var entryBox = document.getElementById('entry-box');

    enterButton.onclick = AddListItem;

    entryBox.onkeypress = function(e) {
        var event = e || window.event;
        var charCode = event.which || event.keyCode;

        if ( charCode == '13' ) {
            AddListItem();
            return false;
        }
    }

    entryBox.onfocus = ClearInput;

    document.getElementsByTagName('input').onclick = CompletedTask;
}