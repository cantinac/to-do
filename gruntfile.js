module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    watch: {
      stylus: {
        files: '_/css/base.styl',
        tasks: ['stylus']
      }
    },

    stylus: {
      compile: {
        options: { 
          paths: ["_/css"],
          import: [ 'nib' ]
        },
        files: {
          "_/css/style.css": ["_/css/base.styl"]
        }
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-stylus');


  // Default task(s).
  grunt.registerTask('server', ['stylus', 'watch']);

};

