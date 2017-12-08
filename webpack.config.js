const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
      path: '/Users/leoso/allmax/public',
      filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [
                { loader: "style-loader" },
                { loader: "css-loader" }
            ]}
        ]
    }
};