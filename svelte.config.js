const preprocess = require('svelte-preprocess');

module.exports = {
    preprocess: [
        preprocess({
            postcss: require('./postcss.config.js'),
        }),
    ],
};
