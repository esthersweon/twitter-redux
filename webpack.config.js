var path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, './build/'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /.js$/, loader: "babel-loader" }
        ]
    }
};