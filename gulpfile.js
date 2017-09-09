var ejs = require("gulp-ejs")
var gulp = require('gulp') 
var rename= require('gulp-rename')
var fs = require('fs');
gulp.task('build', function() {
 gulp.src("./views/layout.ejs")
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
  
   gulp.src("./dist/layout.ejs")
   .pipe(rename("index.html"))
   .pipe(gulp.dest("./dist"))   
});
