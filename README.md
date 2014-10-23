Peter Gaivoronski - Todo List App

Instructions: 

Install bower if you do not have it (npm -g install bower)
Run "bower install" to get dependencies.
Run index.html in browser to test app.

Notes: 

* Backbone.js requires jquery to run, but the instructions said explicitly not to use jquery. Therefore require.js loads a blank file instead of jquery to prevent crashes client-side. This is a deep bug with the backbone code that was way out of scope for this project.

* The default Backbone view architecture is also too jquery-dependent to use. Therefore views are custom javascript objects with a custom rendering pipeline using Handlebars and oolib to construct the actual objects. 

* Todos are simple models that are part of a simple todos collection. There wasn't much required in the way of model manipulation, so they are there mostly as boilerplate to extend this project further.

* The dom manipulation is done using base javascript functions to avoid the jquery dependency.

* Ideally the functionality behind the views would be split off into controllers, but there wasn't much functionality to split off so I decided to just keep the event responses as part of the views.