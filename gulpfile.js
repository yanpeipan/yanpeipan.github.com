const gulp     = require('gulp');
const cleanCSS = require('gulp-clean-css');


function build() {
    return gulp.src('_site/assets/**/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('_site/assets/'))
}


exports.build = build
