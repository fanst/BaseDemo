/// <binding BeforeBuild='Run - Production' AfterBuild='Run - Development' />
//开发环境执行 自动检测变化执行webpack
//npm run dev

var webpack = require("webpack");
var path = require("path");
var entryConfig = require("./entry-config.js"); //页面打包的入口文件，每次项目迭代增加的入口文件往里加
var prod = process.env.NODE_ENV === "production" ? true : false; //判断是否生产环境

module.exports = {
    //多入口文件配置
    entry: entryConfig,
    output: {
        path: __dirname,
        filename: "app/dist/[name].js",

        publicPath: "/", // 设置require.ensure路径
        chunkFilename: "app/dist/chunk/[name].js" // 设置require.ensure 文件名
    },
    //plugins: [
    //     new webpack.IgnorePlugin(/\.\/jquery.js$/),//ignoreFiles
    //],
    resolve: {
        modules: ["app", __dirname, "node_modules"],
        // modulesDirectories: ["common", __dirname, "node_modules"],
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                //html不再移除属性双引号
                loader: "html-loader?minimize=true&removeAttributeQuotes=false"
            },
            {
                test: /\.(png|jpg)$/,
                loader: "url-loader?limit=8192"
            }
        ]
    },
    externals: {
        'jquery': "jQuery",
        '_': "_",
        'underscore': "_",
        'template': "template",
        'Vue': "Vue",
        'Vuex': "Vuex",
        'moment': "moment",
        'axios': "axios",
        'ES6Promise': "ES6Promise",
        'VueRouter': "VueRouter",
        'WdatePicker': 'WdatePicker',
        'WebUploader': 'WebUploader'
    }

};
if (prod) {
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || "false"))
        }),
        new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false, properties: false, drop_console: true } })
    ]);
} else {
    module.exports.devtool = "source-map";
    module.exports.devServer = {
        port: 8080,
        contentBase: "./build",
        hot: true,
        historyApiFallback: true,
        publicPath: "",
        stats: { colors: true }
    };
}