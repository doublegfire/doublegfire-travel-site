var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-Sync').create();


  gulp.task('watch', function() {

    browserSync.init({
    	notify:false,
    	server: {
    		baseDir: "app"
    	}
    });
/*This(browsersync.reload) will refresh the page*/

	watch('./app/index.html', function(){
		browserSync.reload();
	});

    watch('./app/assets/styles/**/*.css', function() {
    	gulp.start('cssInject');
    });


});

gulp.task('cssInject', ['styles'], function(){
    return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
})

/*This(tasks)watch is saying to watch for changes in my html*/
/*This(browsersync) will spin and open a browser but you need to tell but to open EI "app" to open new html in hte browser*/



