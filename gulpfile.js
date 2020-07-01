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
function mini() {
    return gulp.src('./**/*.html')
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
      .pipe(gulp.dest('.'))
}


exports.build = build
