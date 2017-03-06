module.exports = {
  templates: {
    src: [
      './sources/templates/demo.jade',
      './sources/templates/index.jade',
    ],
    dest: './docs/',
  },
  styles: {
    src: './sources/styles/*.scss',
    watch: './sources/styles/**/*.scss',
    dest: './dist/',
    sourcemaps: '/sources/styles',
    output: 'mn-radio.css',
  },
  scripts: {
    src: [
      './sources/**/*.js',
      '!./sources/**/*.spec.js',
    ],
    dest: './dist/',
    output: 'mn-radio.js',
  },
  lintScripts: [
    './gulpfile.js',
    './tasks/**/*.js',
    './sources/**/*.js',
  ],
  browserSync: require('browser-sync').create(),
  browserSyncOptions: {
    server: {
      baseDir: [
        './docs',
        '.',
      ],
    },
    notify: false,
    reloadDelay: 100,
    open: false,
  },
}
