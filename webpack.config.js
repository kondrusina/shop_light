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
        filename: 'main[contenthash].js'
    },

    plugins: [
        //плагин html 
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
        }),
        // плагин css
        new MiniCssExtractPlugin({
            filename: 'main[contenthash].css'
        })
    ],

    module: {
        rules: [

            // loading html
            {
                test: /\.html$/i,
                loader: 'html-loader'
            },

            // loading styles
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
            },

            // loading babel
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },

            // loading fonts
            {
                test: /\.(ttf|otf|eot|woff|woff2)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]'
                }
            },

            //loading images 
            {
                test: /\.gpe?g$|\.gif$|\.png|\.ico|\.svg$/,
                use: 'file-loader',
                generator: {
                    filename: 'images/[name][ext]'
                }
            }
        ],
    }
}