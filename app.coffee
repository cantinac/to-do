jQuery ->
  

  class ListView extends Backbone.View

    el: $ 'body'

    initialize: ->

      _.bindAll @
      @render()

    render: ->
      $(@el).append '<ul><li>Testing out life in general</li></ul>'