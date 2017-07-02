'use strict';

/**
 * Module dependencies.
 */
var webpack = require('webpack');

/**
 * Config.
 */
module.exports = {
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin()
    ]
};
