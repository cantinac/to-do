// Cantina-Todo Models & Collections

var Todo = Backbone.Model.extend({
  defaults: {
    title: 'New Todo',
    created: null,
    completed: null,
  },

  initialize: function(attrs, options){
    this.set('created', new Date());
    this.set(attrs);

    this.on('all', function(ev){
      console.log('Event!: ', ev)
    })
  },

  toggle: function(){
    return (this.get('completed') === null) ? this.set('completed', new Date()) : this.set('completed', null)
  },
})



var Todos = Backbone.Collection.extend({
  model: Todo,

  comparator: 'completed',
})
