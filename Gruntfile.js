module.exports = function(grunt) {

  bower = 'bower_components/';
  app = 'app/';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Sass
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'public/css/main.min.css': 'css/main.sass'
        }
      }
    },

    // Uglify
    uglify: {
      options: {
        banner: '/*! <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        beautify: true
      },
      build: {
        src: [
          // Libs
          bower+'zepto/zepto.min.js',
          bower+'underscore/underscore-min.js',
          bower+'backbone/backbone.js',
          bower+'backbone.localStorage/backbone.localStorage-min.js',
          // App
          app+'models/todo.js',
          app+'collections/todosCollection.js',
          app+'views/todos.js',
          app+'views/app.js',
          app+'init.js',
        ],
        dest: 'public/js/main.min.js'
      }
    },

    // Watch
    watch: {
      options: {
        livereload: true,
      },
      sass: {
        files: 'css/**/*.sass',
        tasks: ['sass']
      },
      js: {
        files: 'app/**/*.js',
        tasks: ['uglify']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', [
    'watch'
  ]);
};