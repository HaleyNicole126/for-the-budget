const webpack = require("webpack")
const path = require("path");

module.exports = {
    entry: './public/js/index.js',
    output: {
        path: path.join(__dirname, '/public/dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
};