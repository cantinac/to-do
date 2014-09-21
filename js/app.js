/**
 * Cantina coding assessment – TODO application
 *
 * @author Joseph Wilson
 */

var template = function(name) {
    return Mustache.compile($('#'+name+'-template').html());
};

var Todo = Backbone.Model.extend({
    defaults: {
        description: "",
        completed: false
    }
});

var Todos = Backbone.Collection.extend({
    model: Todo,
    localStorage: new Store("todos")
});

var TodoView = Backbone.View.extend({
    template: template("todo"),
    events: {
        "click .toggle": "toggleTodo"
    },
    initialize: function() {

    },
    render: function() {

    },
    toggleTodo: function() {

    }
});

var TodoApp = Backbone.View.extend({
    el: $("todo-app"),
    events: {
        "click button#add-todo": "addTodo"
    },
    initialize: function() {

    },
    render: function() {

    },
    addTodo: function() {

    },
    appendTodo: function() {

    }
});

$(function() {
    new TodoApp();
});
