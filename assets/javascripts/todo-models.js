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

    this.on('destroy', this.onDestroy, this)
  },

  toggle: function(){
    return (this.get('completed') === null) ? this.set('completed', new Date()) : this.set('completed', null)
  },

  complete: function(){
    return this.set('completed', new Date());
  },

  uncomplete: function(){
    return this.set('completed', null)
  },

  onDestroy: function(){
    this.stopListening()
    this.off()
    this.clear()
  },

})



var Todos = Backbone.Collection.extend({
  model: Todo,

  // sort based on created date first, then completed date. separates completed from in-progress
  comparator: function(a,b){

    var aDate = a.get('completed'),
        bDate = b.get('completed')

    // if both aren't complete, sort by created date
    if ((aDate === null) && (bDate === null)) {
      var aCreate = a.get('created'),
          bCreate = b.get('created');

      return aCreate > bCreate ? 1 : aCreate < bCreate ? -1 : 0;
    
    // if one is complete, it will always come after incomplete
    } else if (aDate === null) {
      return -1;
    } else if (bDate === null) {
      return 1;

    // if both are complete, sort by completed date  
    } else {
      return aDate > bDate ? 1 : aDate < bDate ? -1 : 0;
    }
  },


  // force the collection to re-sort when an item changes
  initialize: function(){
    this.on('change', function(){
      this.sort();
    }, this)
  },

})
