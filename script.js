(function () {

// copied from http://stackoverflow.com/questions/13867347/javascript-algorithm-to-determine-orientation-of-tablet
function checkOrientation() {
    var orientation = "portrait";
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    if (screenWidth > screenHeight) {
        orientation = "landscape";
    }
    document.body.className = orientation;
}

// copied from http://stackoverflow.com/questions/1649086/detect-rotation-of-android-phone-in-the-browser-with-javascript
var supportsOrientationChange = "onorientationchange" in window,
    orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

window.addEventListener(orientationEvent, function() {
    checkOrientation();
}, false);

checkOrientation();

var btn = document.getElementById("todo-button");

btn.onclick = function () {
    var inpt = document.getElementById("todo-input");
    var ul = document.getElementById("todo-list");
    var item = document.createElement('li');
    item.className = "todo-item-incomplete";
    item.innerHTML = '<input type="checkbox" />' + inpt.value;
    ul.appendChild(item);
    item.onclick = function () {
        if (this.firstChild.checked) {
            this.className = 'todo-item-complete';
        } else {
            this.className = 'todo-item-incomplete';
        }
    }
};

})();
