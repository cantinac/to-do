Scott Ivey / scott.ivey@gmail.com

Some notes: 

- `./public` is treated as the root server directory.

- The `deferred.js` script is used to provide jQuery's `$.deferred()` functionality to Zepto.  Backbone.Marionette won't run without it.

- Plain Underscore templates tend to be messy, and in general I prefer Handlebars.  Because this app only involves two templates, I couldn't justify the added weight of the Handlebars runtime.

- It would be more efficient to precompile the client-side templates, but in this version they're just included in the markup as scripts with `type="text/x-template"`.  This way all the markup is in one obvious place.

- Running the Makefile requires `sass` and `coffee` (the Coffeescript compiler).  However, the compiled results of running `make` are already in this repo.
