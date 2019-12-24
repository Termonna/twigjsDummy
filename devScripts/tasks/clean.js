'use strict';

/**
 * DEPENDENCIES
 */
const config = require('./config');
const del = require('del');

/**
 * CLEAN
 */
function clean() {
    return del([
        config.pages.output,
        config.styles.output
    ]);
}

function cleanImages() {
    return del([config.images.output]);
}

function cleanFonts() {
    return del([config.fonts.output]);
}

clean.displayName = 'Clean';
clean.description = 'Clean page files';

module.exports = {
    clean,
    cleanImages,
    cleanFonts
};
