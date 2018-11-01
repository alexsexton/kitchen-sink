// Gulp.js configuration

// Modules
var gulp = require('gulp')
var newer = require('gulp-newer')

// Optimise images and SVG
var imagemin = require('gulp-imagemin')
var svgmin = require('gulp-svgmin')

// JS Tasks
var babel = require('gulp-babel')
var concat = require('gulp-concat')
var deporder = require('gulp-deporder')
var stripdebug = require('gulp-strip-debug')
var uglify = require('gulp-uglify')

// Sass Modules
var sass = require('gulp-sass')
var postcss = require('gulp-postcss')
var assets = require('postcss-assets')
var autoprefixer = require('autoprefixer')
var mqpacker = require('css-mqpacker')
var cssnano = require('cssnano')

var folder = {
  src: 'assets/',
  build: 'static/'
}

// image processing
gulp.task('images', function () {
  var out = folder.build + 'images/'
  return gulp.src(folder.src + 'images/*')
    .pipe(newer(out))
    .pipe(imagemin({ optimizationLevel: 5 }))
    .pipe(gulp.dest(out))
})

// SVG min
gulp.task('svgmin', function () {
  var out = folder.build + 'images/'
  return gulp.src(folder.src + 'images/*')
    .pipe(svgmin())
    .pipe(gulp.dest(out))
})

// CSS processing
gulp.task('css', ['images'], function () {
  var postCssOpts = [
    assets({ loadPaths: ['assets/'] }),
    autoprefixer({ browsers: ['last 2 versions', '> 2%'] }),
    mqpacker
  ]
  postCssOpts.push(cssnano)

  return gulp.src(folder.src + 'scss/main.scss')
    .pipe(sass({
      outputStyle: 'nested',
      imagePath: 'images/',
      precision: 3,
      errLogToConsole: true
    }))
    .pipe(postcss(postCssOpts))
    .pipe(gulp.dest(folder.build))
})

// Babel processing
gulp.task('babel', function () {
  gulp.src([
    folder.src + 'js/lib/*',
    folder.src + 'js/*'
  ])
    .pipe(babel())
    .pipe(deporder())
    .pipe(concat('main.js'))
    .pipe(gulp.dest(folder.build))
})

// JavaScript processing
gulp.task('js', ['babel'], function () {
  var jsbuild = gulp.src([
    folder.src + 'js/plugins/*',
    folder.src + 'js/lib/*',
    folder.src + 'js/main.js'
  ]) // <- Multiple files need to go in an array
    .pipe(babel())
    .pipe(deporder())
    .pipe(concat('main.min.js'))

  jsbuild = jsbuild
    .pipe(stripdebug())
    .pipe(uglify())

  return jsbuild.pipe(gulp.dest(folder.build))
})

// run all tasks
gulp.task('run', ['images', 'css', 'babel', 'js'])

// watch for changes
gulp.task('watch', ['run'], function () {
  // image changes
  gulp.watch(folder.src + 'images/**/*', ['images'])
  // javascript changes
  gulp.watch(folder.src + 'js/**/*', ['babel', 'js'])
  // css changes
  gulp.watch(folder.src + 'scss/**/*', ['css'])
})

// default task
gulp.task('default', ['run'])
