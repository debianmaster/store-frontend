var ejs = require("gulp-ejs")
var gulp = require('gulp') 
var fs = require('fs');
gulp.task('build', function() {
 gulp.src("./views/*.ejs")
    .pipe(ejs({
        title:           'Embedded Market',
        description: 'All your Embedded needs at one place',
        author:          'J Chakrdhar Rao',
        error: 'not found',
        body: fs.readFileSync('./views/home.ejs','utf8'),
        _layoutFile: true
    }))
    .pipe(gulp.dest("./dist"))
    
   gulp.src([
    '*static/css/**/*',
    '*static/js/**/*'
   ])
  .pipe(gulp.dest('./dist'));
 
});
