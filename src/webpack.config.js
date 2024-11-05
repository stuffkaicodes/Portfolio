const path = require('path');

module.exports = {
    entry: './src/index.js', // Adjust the entry point according to your project structure
    output: {
        filename: 'bundle.js', // The output filename
        path: path.resolve(__dirname, 'dist'), // The output directory
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Use Babel to transpile JavaScript files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.json$/, // JSON files can be imported directly
                type: 'javascript/auto', // Required for Webpack 4+
            },
        ],
    },
    mode: 'development', // Set the mode to development or production
};
