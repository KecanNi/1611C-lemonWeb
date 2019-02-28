var gulp = require('gulp');
var sass = require('gulp-sass');  //编译scss
var server = require('gulp-webserver');  //起服务
gulp.task('devScss', function () {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
})
gulp.task('devServer', function () {
    return gulp.src('src')
        .pipe(server({
            port: 8080,
            proxies: [
               
            ]
        }))
})
gulp.task('watch',function(){
    return gulp.watch('./src/scss/*.scss',gulp.series('devScss'))
})
gulp.task('dev',gulp.series('devScss','devServer','watch'))