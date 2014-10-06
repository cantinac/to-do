// Backbone.Model
// -------------

var TodoItem = Backbone.Model.extend({
  defaults:  {
    description: '',
    status: 'incomplete'
  },
  toggleStatus: function(){
    if(this.get('status') === 'incomplete'){
      this.set({'status': 'complete'});
    }else{
      this.set({'status': 'incomplete'});
    }
    this.save();
  },
  urlRoot: '/todos'
});

var todoItem = new TodoItem(
  { description: 'Walk the Dog', status: 'incomplete' }
);

// Backbone.View
// -------------

var TodoView = Backbone.View.extend({
  initialize: function(){
    this.model.on('change', this.render, this);
    this.model.on('destroy', this.remove, this);
  },
  tagName: 'article',
  id: 'todo-view',
  className: 'todo',
  template: _.template('<h3>' + '<input type=checkbox' + '<% if (status === "complete") print("checked") %>/>' + '<%= description %></h3>'),
  events: {
    'change input': 'toggleStatus'
  },

  toggleStatus: function(){
    this.model.toggleStatus();
  },
  render: function(){
    var attributes = this.model.toJSON();
    this.$el.html(this.template(attributes));
  },
  remove: function(){
    this.$el.remove();
  }

  //$('#todo-view').html ===> todoView.$el.html()
});
var todoView = new TodoView({
  model: todoItem
});
todoView.render();
console.log(todoView.el);


//myView.el defaults to div
// Backbone.Collection
// -------------

var TodoList = Backbone.Collection.extend({

  url: '/todos',
  model: TodoItem
});
var todoList = new TodoList();




















// Backbone.Router
// -------------