// knockback viewmodels

var cantinaVM = function(){
  var self = this;

  console.log('vm created')

  self.templateName = 'cantina-root';

  self.collections = {
    todos: new Todos()
  };

  self.filterOptions = ko.observableArray(['all', 'complete', 'inProg'])
  self.filter = ko.observable('all')

  self.todos = kb.collectionObservable(
    self.collections.todos,
    todoVM,
    {
      filters: function(model){
        var myFilter = self.filter();

        if (myFilter === 'all') {
          return true;
        } else if (myFilter === 'complete') {
          return model.get('completed') != null;
        } else {
          return model.get('completed') === null;
        }
      }
    }
  );

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

  self.isChecked = ko.observable(false);

  self.isChecked.subscribe(function(newvalue){
    return (newvalue === true) ? model.complete() : model.uncomplete();
  })

  self.remove = function(){
    return model.trigger('destroy', model, model.collection, {})
  }
}





var cantinaTodo = new cantinaVM();
ko.applyBindings(cantinaTodo);
