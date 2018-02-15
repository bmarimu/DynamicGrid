const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const Merge = require("webpack-merge");
const CommonConfig = require("./webpack.common.js");
var package = require('./package.json');

module.exports = Merge(CommonConfig, {
    devtool: "inline-source-map",

    entry: {
        vendor: [path.resolve(__dirname, "./src/vendor.ts")],
        app: path.resolve(__dirname, "./src/index.ts")
          

    },

    output: {
        filename: "[name].js",
        path: __dirname + "/dist",
        // Making sure the CSS and JS files that are split out do not break the template cshtml.
        publicPath: "/dist/",
        // Defining a global var that can used to call functions from within ASP.NET Razor pages.
        library: "sample_GridStack",
        libraryTarget: "var"
    },

    module: {
        loaders: [
            // All css files will be handled here
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },

            
            {
                test: /\.scss$|\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                })
            }
        ]
    },

    plugins: ([        
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("development")
            }
        }),
        new ExtractTextPlugin({
            filename: 'main.css',
            allChunks: true
        }),

        // Split out library into seperate bundle and remove from app bundle.
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
             minChunks: Infinity,
        }),

        // Webpack boilerplate and manifest in seperate file.
        new webpack.optimize.CommonsChunkPlugin({
            name: "runtime"
        }),
    ]),
    
})