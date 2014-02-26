window.Todo = window.Todo || {};
window.Todo.TodoItemView = Backbone.View.extend({

    tagName:  'li',

    template: _.template($('#todo-item-template').html()),

    events: {
        'change input[type=checkbox]': 'toggleCheckbox',
        'click .remove': 'removeTodo',
    },

    toggleCheckbox: function(e){
        var checked = this.$el.find('input[type=checkbox]').attr('checked');
        this.$el.toggleClass("checked", checked);
        this.model.set("done", checked);
        this.model.save();
    },

    removeTodo: function(e) {
        this.model.destroy();
        this.remove();
    },

    render: function(){
        this.$el.html(this.template(this.model.attributes));
        this.toggleCheckbox();
        return this;
    },


});
