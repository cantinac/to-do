// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');

var paths = {
    scripts: [
        'bower_components/zepto/zepto.min.js',
        'bower_components/underscore/underscore.js',
        'bower_components/backbone/backbone.js',
        'bower_components/backbone.localstorage/backbone.localstorage.js',
        'js/*.js',
        'js/main.js'
    ],
    css: [
        'scss/index.scss'
    ],
    images: [
        'img/*'
    ]
};

// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src(paths.css)
        .pipe(sass())
        // .pipe(gulp.dest('dist'))
        .pipe(rename('index.min.css'))
        .pipe(sass({
            outputStyle: "compressed"
        }))
        .pipe(gulp.dest('dist'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src(paths.scripts)
        .pipe(concat('index.js'))
        // .pipe(gulp.dest('dist'))
        .pipe(rename('index.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

// images
gulp.task('images', function(){
    return gulp.src(paths.images)
        .pipe(imagemin())
        .pipe(gulp.dest('dist'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'images', 'watch']);
