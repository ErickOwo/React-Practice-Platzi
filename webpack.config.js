const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "bundle.js",
        publicPath: "/"
    },
    mode: "development",
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            "@components": path.resolve(__dirname,"src/components/"),
            "@containers": path.resolve(__dirname,"src/containers/"),
            "@styles": path.resolve(__dirname,"src/styles/"),
            "@icons": path.resolve(__dirname,"src/assets/icons/"),
            "@logs": path.resolve(__dirname,"src/assets/logs/"),
            "@pages": path.resolve(__dirname,"src/pages/"),
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader"
                }
            },
            {
                test: /\.s?[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }, 
            {
                test: /\.(png|svg)$/,
                type: "asset"
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, "public")
        },
        compress: true,
        port: 3005,
        open: true,
        historyApiFallback: true
    }
}