module.exports = function (grunt) {
  grunt.initConfig({
   pkg: grunt.file.readJSON('package.json'),
   copy: {
      main: {
	    cwd: 'src/html',
	    src: '*.html',
	    dest: 'dist/',
	    expand: true
     },
    main: {
	    cwd: 'src/images',
	    src: '*.png',
	    dest: 'dist/',
	    expand: true
     }
    },
    browserify: {
      dist: {
	src: ['src/js/*.js'],
	dest: 'build/<%= pkg.name %>.js'
     }
    },
    uglify: {
      dist: {
        src: 'build/<%= pkg.name %>.js',
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },
     sass: {
      dist: {
	files: {
	  'build/<%= pkg.name %>.css': 'src/sass/app.sass'
	}
      }
    },
    cssmin: {
      target: {
	files: {
	  'dist/<%= pkg.name %>.min.css': ['build/<%= pkg.name %>.css']
	}
      }
    }
 });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', [
    'copy',
    'browserify',
    'uglify',
    'sass',
    'cssmin'
  ]);
};

