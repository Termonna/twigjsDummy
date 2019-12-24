const isProd = process.argv.some(flag => {
    return flag === '--production'
});

exports.isProd = isProd;
