var gulp=require('gulp');
var less=require('gulp-less');
var browse=require('browser-sync');
gulp.task('style',function(){
  gulp.src('target/*.less')
  .pipe(less())
  .pipe(gulp.dest('src/'))
  .pipe(browse.reload({stream:true}));
})
gulp.task('html',function(){
  gulp.src('target/*.html')
  .pipe(gulp.dest('src/'))
  .pipe(browse.reload({stream:true}));
})
gulp.task('serve',function(){
  browse({
    server:{baseDir:['src']},
  });
  gulp.watch('target/*.less',['style']);
  gulp.watch('target/*.html',['html']);
})
