// knockback viewmodels

var cantinaVM = function(){
  var self = this;

  console.log('vm created')

  self.templateName = 'cantina-root';

  self.collections = {
    todos: new Todos()
  };

  self.todos = kb.collectionObservable(self.collections.todos);

  self.newTodoTitle = ko.observable();

  self.createTodo = function(){
    self.collections.todos.add({title: self.newTodoTitle(), });
    self.newTodoTitle('');
  }

}



var todoVM = function(model){
  var self = this;

  self.templateName = 'cantina-todo';

  self.title = kb.observable(model, 'title');
  self.completed = kb.observable(model, 'completed');

  self.isChecked = ko.computed(function(){
    return this.completed() != null;
  }, this);

  self.onToggle = function(){
    self.model.toggle();
  };

}









var cantinaTodo = new cantinaVM();
ko.applyBindings(cantinaTodo);
