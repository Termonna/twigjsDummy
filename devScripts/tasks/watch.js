'use strict';

/**
 * DEPENDENCIES
 */
const gulp = require('gulp');
const config = require('./config');
const reload = require('./server/reload');
const pages = require('./pages');

/**
 * WATCH
 */
function watch() {
    gulp.watch(config.pages.watch, gulp.series(pages, reload));
}

watch.displayName = 'Watch';
watch.description = 'Watch dev files';

module.exports = watch;
