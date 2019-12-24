'use strict';

/**
 * DEPENDENCIES
 */
const browserSync = require('browser-sync').create();
const config = require('../config');

/**
 * SERVER
 * @param {Stream} done
 */
function server(done) {
    browserSync.init({
        server: {
            baseDir: config.server.watch,
        },
        port: 8080,
        open: false,
        notify: false
    });
    done();
}

server.displayName = 'Server';
server.description = 'Create local server localhost:8080';

module.exports = {
    server: server,
    browserSync: browserSync
};
