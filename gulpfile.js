'use strict';

/**
 * DEPENDENCIES
 */
const gulp = require('gulp');
const pages = require('./devScripts/tasks/pages');
const clean = require('./devScripts/tasks/clean').clean;
const server = require('./devScripts/tasks/server/server').server;
const watch = require('./devScripts/tasks/watch');

/**
 * TASKS
 */

gulp.task('build', gulp.series(clean, gulp.parallel(pages)));

gulp.task('dev', gulp.series(server, watch));
