# Cantina To-Do List Instructions

## Requirements
The Build was ceated with [Yeoman generator-bootstrap-less](https://github.com/Thomas-Lebeau/generator-bootstrap-less)

* Install [Node Package Manger](https://nodejs.org/download/)
* Install Grunt: `npm install -g grunt-cli`
* Install Bower: `npm install -g bower`



## Instructions
* In root directory, run `bower install` and `npm install` to install dependencies
* Run `grunt serve' to test locally
* Run `grunt build` to create build in /dist directory
  > Note: `grunt test` or just `grunt` is failing because of a detected error in angular-animate.js


## Build notes
Script checks for duplicate and empty entries

## Further optimizations
* The angular-animate script is too heavy. It should be possible to fade error messages and new items without it.
* [Grunt-Modernizr](https://github.com/Modernizr/grunt-modernizr) or similar to create an optimized Modernizr build. Or just remove it, if not being utilized at all
* Local storage to save changes in the browser