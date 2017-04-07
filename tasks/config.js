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
    output: 'mn-option.css',
  },
  scripts: {
    src: [
      './sources/**/*.js',
      '!./sources/**/*.spec.js',
      '!./sources/**/*.po.js',
    ],
    dest: './dist/',
    output: 'mn-option.js',
  },
  lintScripts: [
    './*.js',
    './tasks/**/*.js',
    './sources/**/*.js',
  ],
  browserSync: require('browser-sync').create(),
  browserSyncOptions: {
    server: {
      index: 'demo.html',
      baseDir: [
        './docs',
        '.',
      ],
    },
    notify: false,
    ui: false,
    reloadDelay: 100,
    open: false,
  },
}
