module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + "/src/index.jsx",
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    module: {
        rules: [
            { test:/\.jsx?$/, exclude: /node_modules/, use: [{loader: "babel-loader", options: { presets: ["react","es2015"] }}],},
            { test: /\.js$/, exclude: /node_modules/, loader: "url-loader?limit=40000&react-hot-loader!babel-loader" },
            { test: /\.css$/, exclude: /node_modules/, loader: "url-loader?limit=40000&style-loader!css-loader" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=40000&file-loader" },
            { test: /\.(woff|woff2)$/, loader:"url-loader?limit=40000&prefix=font/&limit=5000" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" }
        ]
    }
};
