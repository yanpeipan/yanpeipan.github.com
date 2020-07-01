const gulp     = require('gulp');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const htmlclean = require('gulp-htmlclean');

function minifyCss() {
    return gulp.src('./**/*.css')
    .pipe(cleanCSS({debug: true}, (details) => {
      console.log(`${details.name}: ${details.stats.originalSize}`);
      console.log(`${details.name}: ${details.stats.minifiedSize}`);
    }))
    .pipe(gulp.dest('.'))
}
function minifyHtml() {
    return gulp.src('_site/**/*.html')
      .pipe(htmlclean())
      .pipe(htmlmin({
          removeComments: true,//清除HTML注释
          collapseWhitespace: true,//压缩 HTML
          collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input /
          removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
          removeScriptTypeAttributes: true,//删除 <script> 的 type="text/javascript"
          removeStyleLinkTypeAttributes: true,//删除 <style> 和 <link> 的 type="text/css"
          minifyJS: true,//压缩页面 JS
          minifyCSS: true,//压缩页面 CSS
          minifyURLs: true
      }))
      .pipe(gulp.dest('_site/'))
}


exports.build = gulp.parallel(minifyHtml, minifyCss)
