// generated on 2016-03-14 using generator-webapp 2.0.0
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import del from 'del';
import path from 'path';
import replace from 'gulp-replace';
import ext_replace from 'gulp-ext-replace';
import shell from 'gulp-shell';
import extReplace from 'gulp-ext-replace';
import gulpsmith from 'gulpsmith';
import layouts from 'metalsmith-layouts';
import copy from 'metalsmith-copy';
import handlebars from 'handlebars';
import lodash from 'lodash';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

const componentConfig = {
  site: {
    title: 'pxh-chrome',
    version: '3.0.1',
  },
};

gulp.task('sass', ['sass:flatten'], () => {
  gulp.start('sass:min');
  return gulp.src('dist/sass/*.scss')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass.sync({
      outputStyle: 'expanded',
      precision: 10,
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({ browsers: ['> 1%', 'last 2 versions', 'Firefox ESR'] }))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'))
});

gulp.task('sass:min', () => {
  return gulp.src('dist/sass/*.scss')
    .pipe($.plumber())
    .pipe($.sass.sync({
      outputStyle: 'expanded',
      precision: 10,
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({ browsers: ['> 1%', 'last 2 versions', 'Firefox ESR'] }))
    .pipe($.cssnano())
    .pipe(extReplace('.min.css', '.css'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('sass:flatten', shell.task('node ./flatten.js'));

gulp.task('js', () => {
  return gulp.src('public/js/**/*.js')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('dist/js'))
    .pipe($.if('*.js', $.uglify({
      preserveComments: 'some',
    })))
    .pipe(extReplace('.min.js', '.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(reload({ stream: true }));
});

function lint(files, options) {
  return () => {
    return gulp.src(files)
      .pipe(reload({ stream: true, once: true }))
      .pipe($.eslint(options))
      .pipe($.eslint.format());
  };
}
const testLintOptions = {
  env: {
    mocha: true,
  },
};

gulp.task('lint', lint('public/js/**/*.js'));
gulp.task('lint:test', lint('test/unit/spec/**/*.js', testLintOptions));

gulp.task('smith', () => {
  gulp.src(['src/screens/*'])
  .pipe($.frontMatter()).on('data', (file) => {
    lodash.assign(file, file.frontMatter);
    delete file.frontMatter;
  })
  .pipe(
    gulpsmith()
    .metadata(componentConfig)
    .on('error', console.log.bind(console))
    .use(layouts({
      engine: 'handlebars',
      directory: 'src/layouts',
      pattern: '*.hbs',
      default: 'default.hbs',
      partials: 'src/partials',
    }))
    .on('error', console.log.bind(console))
    .use(copy({
      pattern: '*.hbs',
      extension: '.html',
      move: true,
    }))
    .on('error', console.log.bind(console))
  )
  .pipe(gulp.dest('dist'))
  .pipe(reload({ stream: true }));
});

gulp.task('extras', ['fonts'], () => {
  return gulp.src([
    'public/*.*',
    '!public/*.html',
    '!public/.eslintrc',
  ], {
    dot: true,
  }).pipe(gulp.dest('dist'));
});

gulp.task('img', () => {
  return gulp.src(['public/img/*']).pipe(gulp.dest('dist/img'));
});
gulp.task('fonts', () => {
  return gulp.src(['fonts/*']).pipe(gulp.dest('dist/fonts'));
});

gulp.task('clean', del.bind(null, ['dist']));

gulp.task('serve', ['sass', 'js', 'extras', 'img'], () => {
  browserSync.init({
    ui: {
      port: 4040,
    },
    port: 4000,
    notify: false,
    server: {
      baseDir: ['dist', 'public'],
      routes: {
        '/bower_components': 'bower_components',
      },
    },
  });

  gulp.watch('src/**/*.hbs', ['smith']);
  gulp.watch('sass/**/*.scss', ['sass']);
  gulp.watch('public/js/**/*.js', ['js']);
  gulp.watch('public/img/**', ['img']);

  gulp.watch([
    'dist/*.html',
    'dist/img/*',
    'dist/css/*.css',
    'dist/js/*.js',
  ]).on('change', reload);
});

gulp.task('webdriver:update', shell.task('./node_modules/protractor/bin/webdriver-manager update'));

gulp.task('e2e', shell.task('protractor ./test/e2e/protractor.config.js'));

gulp.task('serve:e2e', ['webdriver:update', 'sass', 'js', 'extras', 'img'], () => {
  browserSync.init({
    ui: false,
    port: 4444,
    open: false,
    notify: false,
    server: {
      baseDir: ['dist'],
      routes: {
        '/bower_components': 'bower_components',
      },
    },
  });
});

gulp.task('serve:test', ['js'], () => {
  browserSync.init({
    ui: false,
    port: 4040,
    notify: false,
    server: {
      baseDir: 'test/unit',
      routes: {
        '/js': 'dist/js',
        '/bower_components': 'bower_components',
      },
    },
  });

  gulp.watch('public/js/**/*.js', ['js']);
  gulp.watch('test/unit/spec/**/*.js').on('change', reload);
  gulp.watch('test/unit/spec/**/*.js', ['lint:test']);
});

gulp.task('build', ['lint', 'smith', 'sass', 'js', 'extras', 'img']);

gulp.task('dist', ['clean'], () => {
  gulp.start('build');
});

// the default task is the dist task
gulp.task('default', ['dist']);
