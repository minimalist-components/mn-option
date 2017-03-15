import gulp from 'gulp'
import testcafe from 'gulp-testcafe'
import {specs} from './config.js'

gulp.task('test', testTask)

function testTask() {
  return gulp
    .src(specs.src)
    .pipe(testcafe(specs.options))
    .on('end', () => process.exit())
}
