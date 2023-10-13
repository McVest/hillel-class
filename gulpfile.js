import gulp from 'gulp';
import minihtml from 'gulp-htmlmin';
import scriptDebug from 'gulp-strip-debug';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import {deleteAsync} from 'del';
import gulpSass from 'gulp-sass';
import sass from 'sass';

const src = './src';
const dist = './dist';

const htmlPath = `${src}/**/*.html`;
const scriptsPath = [
  `${src}/js/car.js`,
  `${src}/js/human.js`,
  `${src}/js/index.js`,
];
const scssPath = `${src}/scss/*.scss`;

const reset = () => {
  return deleteAsync(dist);
}

const copy = () => {
  return gulp.src([
    "${src}/**/*.*",
    `!${htmlPath}`,
    `!${scriptsPath}`,
  ])
}

const html = () => {
  return gulp.src(`${src}/**/*.html`)
    .pipe(minihtml({collapseWhitespace: true}))
    .pipe(gulp.dest(dist))
}

const scripts = () => {
  return gulp.src(scriptsPath)
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest(dist))
}

const scssProcessor = gulpSass(sass);
const cssCompile = () => {
  return gulp.src(scssPath)
    .pipe(scssProcessor({outputStyle: "compressed"}))
    .pipe(gulp.dest(`${dist}/css`))
}

const watchers = () => {
  gulp.watch(htmlPath, html);
  gulp.watch([
    `${src}/**/*.*`,
    `!${htmlPath}`,
  ], copy);
}

const launch = gulp.series(reset, copy, html, cssCompile, scripts);

gulp.task('default', launch);