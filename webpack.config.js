const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        clean: true,
        filename: 'main[contenthash].js' // браузер будет доставать не из своего хэша, а создавать новый файл
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'), //плагин html 
        }),
        new MiniCssExtractPlugin({
            filename: 'main[contenthash].css' // плагин css
        })
    ],

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader'  //html модуль 
            },

            {
                test: /\.(c|sa|sc)ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [require('postcss-preset-env')],
                        }
                    }
                },
                    'sass-loader'
                ],
            }, //style модуль 

            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            } // babel модуль 
        ],
    }
}