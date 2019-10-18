var gulp = require('gulp');
var load = require('gulp-load-plugins')();
var browser = require('browser-sync').create();
// js
gulp.task('js',function(done){
    gulp.src('./js/index-header.js')
    .pipe(load.babel({
        'presets':['@babel/env']
    }))
    .pipe(load.uglify())
    .pipe(gulp.dest('./dist/js/'));
    done()

})
//sass
gulp.task('sass',function(done){
    gulp.src(['./sass/zhuce.scss','./sass/login.scss'])
    .pipe(load.sass())
    .pipe(gulp.dest('./dist/css/'))
    done()

})
//css
gulp.task('css',function(done){
    gulp.src('./css/*.css')
    .pipe(load.minifyCss())
    .pipe(gulp.dest('./dist/css/'));
    done();
})
//html
gulp.task('html',function(done){
    gulp.src('./*.html')
    .pipe(load.minifyHtml())
    .pipe(gulp.dest('./dist/'))
    done()
})
//img
gulp.task('img',function(done){
    gulp.src('./img/**')
    // .pipe(load.imageMin())
    .pipe(gulp.dest('./dist/img/'))
    done()
})
//合并
gulp.task('minify',gulp.series(gulp.parallel('js','sass','css','img','html')),function(done){
    browser.init({
        server:'./dist/',
        port:8080
    })
    done()

})

