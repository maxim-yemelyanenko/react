var gulp = require('gulp');
var sass = require('gulp-sass');
var cp = require('child_process');
var del = require('del');
var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');
var nodemon = require('gulp-nodemon');
var rename = require('gulp-rename');

/**
 * Build js (Webpack)
 */

gulp.task('clean:build', function() {
    del('./public/js/*')
})

gulp.task('build', ['clean:build'], function() {
  return gulp.src('./app/provider.js')
    .pipe(webpack(webpackConfig))
    .on('error', function handleError() {
      this.emit('end'); // Recover from errors
    })
    .pipe(gulp.dest('./'));
});

gulp.task('watch:build', function() {
  return gulp.watch('./app/**/*', ['build']);
});


/**
 * Build css
 */

gulp.task('clean:sass', function() {
    del('./public/css/*')
})

gulp.task('sass', ['clean:sass'], function() {
    return gulp.src(['./sass/**/*.sass', './sass/**/*.scss'])
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('public/css'))
});

gulp.task('watch:sass', function() {
    gulp.watch(['./sass/**/*.sass', './sass/**/*.scss'], ['sass']);
});


/**
 * JSON Server (Database)
 */

gulp.task('restore-database', function() {
  return gulp.src('./data/restore.json')
    .pipe(rename('db.json'))
    .pipe(gulp.dest('./data'));
});

gulp.task('serve:api', ['restore-database'], function(done) {
  cp.exec('node ./node_modules/json-server/bin/index.js --watch ./data/db.json --port 10001', {stdio: 'inherit'})
    .on('close', done);
});


/**
 * Node Server (Express)
 */

gulp.task('serve:node', function(done) {
  nodemon({
    exec: 'node ./node_modules/babel-cli/bin/babel-node.js ./server.js',
    watch: ['server.js'],
    ext: 'js html'
  });
});


/**
 * Main tasks
 */

gulp.task('serve', ['serve:node', 'serve:api']);
gulp.task('watch', ['build', 'watch:build']);
gulp.task('watch', ['build', 'watch:build', 'sass', 'watch:sass']);
gulp.task('default', ['watch', 'serve']);
