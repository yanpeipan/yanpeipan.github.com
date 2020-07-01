const gulp     = require('gulp');
const cleanCSS = require('gulp-clean-css');


function build() {
    return gulp.src('_site/assets/**/*.css')
    .pipe(cleanCSS({debug: true}, (details) => {
      console.log(`${details.name}: ${details.stats.originalSize}`);
      console.log(`${details.name}: ${details.stats.minifiedSize}`);
    }))
    .pipe(gulp.dest('_site/assets/'))
}


exports.build = build
