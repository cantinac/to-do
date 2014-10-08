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

// Model
// -----

var TodoView = Backbone.View.extend({
  initialize: function(){
    this.model.on('change', this.render, this);
    this.model.on('destroy', this.remove, this);
  },
  tagName: 'article',
  id: 'todo-view',
  className: 'todo',
  template: _.template('<h3>' + 
    '<input type=checkbox' + 
    '<% if (status === "complete") print("checked") %>/>' +
    '<%= description %></h3>'),
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

//myView;.el defaults to div
// Backbone.Collection
// -------------

var TodoList = Backbone.Collection.extend({
  url: '/todos',
  model: TodoItem
});
var todoList = new TodoList();

todoList.forEach(function(todoItem){
  // alert(todoItem.get('description'));
});
todoList.filter(function(todoItem){
  return todoItem.get('status') === 'incomplete';
});

// Collection View
// -----
var TodoListView = Backbone.View.extend({
  initialize: function(){
    this.collection.on('add', this.addOne, this);
  },
  render: function(){
    this.collection.forEach(this.addOne, this);
  },
  addOne: function(todoItem){
    var todoView = new TodoView({model: todoItem});
    this.$el.append(todoView.render().el);
  },
});

var todoListView = new TodoListView({collection: todoList});
todoListView.render();
console.log(todoListView.el);
// Seeds
// --------------
var todos = [
  {description: 'eat food', status: 'complete'},
  {description: 'wake up', status: 'incomplete'},
  {description: 'groom boris', status: 'incomplete'}
];
todoList.reset(todos);
var newTodoItem = new TodoItem({
  description: 'take out trash',
  status: 'incomplete'
});
todoList.add(newTodoItem);



// Backbone.Router
// -------------




var router = new Backbone.Router({
  routes: { 'todos/:id': 'show'},
  show: function(id){

  }
});

router.navigate('todos/1', {
  trigger: true
});

Backbone.history.start({pushState: true});
router.navigate('todos/1');

var TodoApp = new(Backbone.Router.extend({
  routes: {
    '': index,
    'todos/:id': 'show'},
  initialize: function(options){
    this.todoList = new TodoList();
    this.todosView = new TodoListView({colection: this.todoList});
    $('#app').append(this.todosView.el);
  },
  start: function(){
    Backbone.history.start({pushState: true});
  },
  index: function(){
    this.todoList.fetch();
  },
  show: function(id){
    this.todoList.focusOnTodoItem(id);
  },

}));

// var TodoRouter = Backbone.Router.extend({
//   routes: {
//     '': index,
//     'todos/:id': 'show'},
//   show: function(id){
//     this.todoList.focusOnTodoItem(id);
//   },
//   initialize: function(options){
//     this.todoList = options.todoList;
//   }

// });
// var todoList = new TodoList();
// var TodoApp = new TodoRouter({todoList: todoList});
