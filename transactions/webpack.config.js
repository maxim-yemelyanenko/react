module.exports = {
    entry: "./app/provider.js",
    output: {
        filename: "public/js/main.js",
        sourceMapFilename: "public/js/main.map"
    },
    devtool: '#source-map',
    module: {
        loaders: [
            {
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    }
}
