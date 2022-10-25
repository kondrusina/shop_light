const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const JavaScriptObfuscator = require('webpack-obfuscator');

module.exports = (env, args) => {
    const isProduction = args?.mode === 'production';

    return {
        entry: {
            main: path.resolve(__dirname, './src/index.js'),
        },

        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'main.[contenthash].js', // браузер будет доставать не из своего хэша, а создавать новый файл
            clean: true,
        },

        performance: {
            hints: false,
            maxEntrypointSize: 512000,
            maxAssetSize: 512000,
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'src', 'index.html'), //плагин html
            }),
            new MiniCssExtractPlugin({
                filename: './main.css', // плагин css
            }),
            isProduction &&
            new JavaScriptObfuscator({
                rotateUnicodeArray: true,
            }),
        ].filter(Boolean),

        module: {
            rules: [
                // loading html
                {
                    test: /\.html$/i,
                    loader: 'html-loader',
                },

                // loading styles
                {
                    test: /\.(c|sa|sc)ss$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: [require('postcss-preset-env')],
                                },
                            },
                        },
                        'sass-loader',
                    ],
                },

                // loading babel
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                        },
                    },
                },

                // loading fonts
                {
                    test: /\.(ttf|otf|eot|woff|woff2)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'fonts/[name][ext]',
                    },
                },

                //loading images
                {
                    test: /\.(png|svg|jpe?g|gif|ico)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: './images/[name].[hash].[ext]',
                    },
                },
            ],
        },
    };
};