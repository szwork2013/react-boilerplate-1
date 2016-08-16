var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('move', function () {
    return gulp.src(
        [
            './images',
            './images/**/*',
            './fonts',
            './fonts/**/*'
        ], {
            base: './'
        }
    )
    .pipe( clean({force: true}) )
    .pipe( gulp.dest('app/resources/') )
});
