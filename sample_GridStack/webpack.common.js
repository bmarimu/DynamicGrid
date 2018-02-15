const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
	target: "web",

	resolve: {
		// Add ".ts" and ".tsx" as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json", ".html"],
        alias: {
            // bind version of jquery-ui
            //"jquery-ui": "jquery-ui/jquery-ui.js",
            'jquery-ui': 'jquery-ui/ui',
            // bind to modules;
            modules: path.join(__dirname, "node_modules")
        }
	},

	module: {
		loaders: [
            // All files with a ".ts" or ".tsx" extension will be handled by "awesome-typescript-loader".
            //{ test: /.ts$/, loader: "awesome-typescript-loader" },

            {
                test: /\.ts?$/,
                use: "ts-loader"
            },


            // All image files will be handled here
            {
            	test: /\.(png|svg|jpg|gif)$/,
            	use: [
                    "file-loader"
            	]
            },

            // All font files will be handled here
            {
            	test: /\.(woff|woff2|eot|ttf|otf)$/,
            	use: [
                    {
                    	loader: "file-loader"
                    }
            	]
            },

            {
                test: /\.html$/,
                use: "html-loader"
            },
            
            //{ test: /underscore/, use: 'exports?_' },
            // All files with ".html" will be handled 
            //{ test: /\.html$/, loader: "html-loader" },

            // All output ".js" files will have any sourcemaps re-processed by "source-map-loader".
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
		]
	},

	plugins: ([
        // make sure we allow any jquery usages outside of our webpack modules
        new webpack.ProvidePlugin({
        	$: "jquery",
        	jQuery: "jquery",
            "window.jQuery": "jquery",

            Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
            Button: "exports-loader?Button!bootstrap/js/dist/button",
            Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
            Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
            Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
            Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
            Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
            Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
            Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
            Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
            Util: "exports-loader?Util!bootstrap/js/dist/util",
        }),
        
        // Clean dist folder.
        new CleanWebpackPlugin(["./dist"], {
        	"verbose": true // Write logs to console.
        }),

        // avoid publishing when compilation failed.
        new webpack.NoEmitOnErrorsPlugin()

        //new HtmlWebpackPlugin({
        //	inject: "head",
        //	filename: "../Views/Shared/_Layout.cshtml",
        //	template: "./Views/Shared/_Layout_Template.cshtml"
        //})
	]),

	// pretty terminal output
	stats: { colors: true }
};