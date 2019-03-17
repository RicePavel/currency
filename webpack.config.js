var path = require("path");

module.exports = {
    devtool: 'eval',
    entry: "./app/app.jsx",
    output: {
        path: path.resolve(__dirname, './public'),
        publicPath: '/public/',
        filename: 'bundle.js',
        sourceMapFilename: 'source.js.map'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options: {
                    presets:["@babel/preset-env", "@babel/preset-react"]
                }
            }
        ]
    }
}
