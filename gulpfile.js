var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    minifyCSS = require('gulp-minify-css');


//壓縮圖片
gulp.task('gulp-imagemin', () =>
    gulp.src('./image/*')   //來源資料夾
        .pipe(imagemin())
        .pipe(gulp.dest('./imagemin')) //目標資料夾, 如需覆蓋則指定跟來源相同
);

//壓縮css
gulp.task('minify-css', function() {
  return gulp.src('./css/*.css')
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest('./minify-css'))
});


//要執行的事件
gulp.task('default',['minify-css']);