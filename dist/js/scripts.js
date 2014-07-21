// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());
//Application data goes here
var Task = function(data){
	this.title = ko.observable(data.title);
	this.isCompleted = ko.observable(data.isCompleted);
};

var taskModel = function(tasks){
	var self = this;

	self.tasks = ko.observableArray();
	self.taskToAdd = ko.observable('');

	//add task
	self.addTask = function(){
		if(self.taskToAdd() !== ''){
			self.tasks.push(new Task({ title: this.taskToAdd(), isCompleted: false }));
			self.taskToAdd('');
		}
	};

	//fire add task when user hits enter
	self.addOnEnter = function(item, evt){
		if(evt.keyCode === 13 && self.taskToAdd().length > 0){
			self.addTask();
		}
	};

	//Gets around the fact that you can't really wrap inputs in labels with knockout bindings
	//http://stackoverflow.com/questions/14867906/knockoutjs-value-toggling-in-data-bind#answer-23635157
	ko.bindingHandlers.toggleClick = {
    init: function (element, valueAccessor) {
        var value = valueAccessor();

        ko.utils.registerEventHandler(element, "click", function () {
            value(!value());
        });
    }
	};
};

ko.applyBindings(taskModel);