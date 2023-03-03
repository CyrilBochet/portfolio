const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require('webpack');


module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: path.resolve(__dirname, "src/assets/images/"), to: path.resolve(__dirname, "dist/images/") },
                { from: path.resolve(__dirname, "src/css/material-theme/theme.light.css"), to: path.resolve(__dirname, "dist/css/material-theme/theme.light.css") },
                { from: path.resolve(__dirname, "src/css/material-theme/theme.dark.css"), to: path.resolve(__dirname, "dist/css/material-theme/theme.dark.css") },
                { from: path.resolve(__dirname, "src/assets/docs/cv.pdf"), to: path.resolve(__dirname, "dist/docs/cv.pdf") },
            ],
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpe?g|svg|png|gif|ico|jfif|eot|ttf|woff2?)(\?v=\d+\.\d+\.\d+)?$/i,
                type: 'asset/resource',
            },
        ]
    }
};
