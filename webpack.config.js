var webpack = require("webpack");
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractPlugin = new ExtractTextPlugin('./css/app.css', {
    disable: false,
    allChunks: true
});

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    // This is the "main" file which should include all other modules
    entry: {		
        app: './resources/assets/js/index.tsx',  		
    },
    // Where should the compiled file go?
    output: {      
        filename: "js/[name].bundle.js",
        chunkFilename: "js/[id].chunk.js",
        path: path.resolve(__dirname, "./public/dist"),
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            filename: "js/commons.js",
            name: "commons"
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',             
        }),
        // new webpack.ProvidePlugin({
        //     React: 'react',
        //     ReactDOM: 'react-dom'
        // }),
      
        extractPlugin
        // new webpack.optimize.UglifyJsPlugin({
        // 	///....
        // })
    ],	
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=1024&publicPath=../&name=../fonts/[name].[ext]'
            }
        ]
    },
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     'react': 'React',
    //     "react-dom": "ReactDOM"
    // },
	
}