const sourceBase = 'src';
const buildBase = 'www';

module.exports = {
    server : {watch: `${buildBase}`},
    pages: {
        input: `${sourceBase}/**/*.twig`,
        watch: [
            `${sourceBase}/**/*.twig`,
        ],
        output: `${buildBase}`
    },
    NODE_ENV    : process.env.NODE_ENV || 'development', // or production
    isProduction: this.NODE_ENV === 'production'
};
