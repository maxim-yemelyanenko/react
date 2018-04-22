var gulp = require('gulp');
var cp = require('child_process');
var rename = require('gulp-rename');


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
 * Main tasks
 */

gulp.task('serve', ['serve:api']);
gulp.task('default', ['serve']);
