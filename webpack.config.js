const FileIncludeWebpackPlugin = require('file-include-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    optimization: {
        minimize: false,
    },
    plugins: [
        new FileIncludeWebpackPlugin(
          {
            source: './src/templates',
            destination: '../dist/html', // relative path to your templates
            replace: [{
              regex: /\[\[FILE_VERSION]]/, // additional things to replace
              to: 'v=1.0.0',
            }],
          },
        ),
        new MiniCssExtractPlugin({
            filename: 'bundle.css',
        }),
    ],
    entry: './src/js/main.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                }]
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {url: false},
                    },
                ],
            },
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {url: false},
                    },
                    "sass-loader"
                ]
            }
        ]
    },
    stats: {
        warningsFilter: ['@import'],
    },
}