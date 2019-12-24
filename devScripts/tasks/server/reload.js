'use strict';

/**
 * DEPENDENCIES
 */
const browserSync = require('./server').browserSync;

/**
 * Server reload
 * @param {Stream} done
 */
function reload(done) {
    browserSync.reload();
    done();
}

reload.displayName = 'Reload';
reload.description = 'Reload server';

module.exports = reload;