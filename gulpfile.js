const gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('sass', function () {
    return gulp.src('sass/styles.sass')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('public'));
});

gulp.task('watch', function () {
    gulp.watch('sass/**/*.sass', gulp.series('sass'));
});

gulp.task('default',  gulp.series('sass', 'watch'));
