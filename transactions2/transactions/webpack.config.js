var webpack = require('webpack');
var path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "css/main.css"
});


module.exports = {
    entry: {
        'js/main.js': './app/provider.js',
        'css/main.css': './sass/main.scss'
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "[name]"
    },
    devtool: '#source-map',
    target: 'web',
    devServer: {
        port: 10000,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: { presets: ["es2015", "react", "stage-2"] }
                }
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    }, {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }],
                    fallback: "style-loader"
                })
            }
        ]
    },
    plugins: [
        extractSass
    ]
};
