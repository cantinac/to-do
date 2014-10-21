var App = App || {};

// App View
  
App.AppView = Backbone.View.extend({
  el: "#app",

  render: function() {
    this.$el.html('App starting');

    // if(!this.menu) {
    //   this.nav = new NavView();
    //   this.menu = new MenuView();
    // }
  }
});
