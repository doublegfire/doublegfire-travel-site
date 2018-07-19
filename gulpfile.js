/*Everything in gulp are ran by (tasks)*/
var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');


gulp.task('default', function() {
    console.log("hooray - you created a Gulp task.");
});

/*To run the second (tasks) you must put the name of it html.*/

gulp.task('html' , function() {
	console.log("Imagine something useful being done to your html here.");
});


gulp.task('styles' , function() {
	return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
	.pipe(gulp.dest('./app/temp/styles'));

});


/*This(tasks)watch is saying to watch for changes in my html*/

gulp.task('watch', function(){
	watch('./app/index.html', function(){
		gulp.start('html');
	});

    watch('./app/assets/styles/**/*.css', function() {
    	gulp.start('styles');
    });


});




