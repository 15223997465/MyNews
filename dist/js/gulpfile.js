var gulp = require("gulp");
var sass = require("gulp-sass");
var minifyCss = require("gulp-minify-css");
var rename = require("gulp-rename");
var connect = require("gulp-connect");
var uglify = require("gulp-uglify");
gulp.task("hello",function(){
	console.log("hello world");
});
gulp.task("images",function(){
	gulp.src("../css/images/*").pipe(gulp.dest("../dist/css/images"));//拷贝图片
});
gulp.task("sass",function(){
	gulp.src("../scss/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("../dist/css"))
	.pipe(minifyCss())
	.pipe(rename({
		suffix:".min"
	}))
	.pipe(gulp.dest("../dist/css"));
});

gulp.task("html",function(){
	gulp.src("../html/*.html")
	.pipe(gulp.dest("../dist/html"))
	.pipe(connect.reload());
});
gulp.task("css",function(){
	gulp.src("../css/*.css")
	.pipe(gulp.dest("../dist/css"))
	.pipe(connect.reload());
});
gulp.task("js",function(){
	gulp.src("../js/*.js")
	.pipe(gulp.dest("../dist/js"));
});
gulp.task("json",function(){
	gulp.src("../json/*.json")
	.pipe(gulp.dest("../dist/json"))
	.pipe(connect.reload());
});
gulp.task("minjs",function(){
	gulp.src("../js/*.min.js")
	.pipe(gulp.dest("../dist/js"));
});
gulp.task("server",function(){
	connect.server({
		root:"../dist",
		livereload:true
	})
});
gulp.task("watch",function(){
	gulp.watch("../html/*.html",["html"]);
	gulp.watch("../sass/*.scss",["sass"]);
	gulp.watch("../js/*.js",["js"]);
	gulp.watch("../css/*.css",["css"]);
})
gulp.task("default",["server","watch","html","sass","css","js","minjs","images","json"]);



