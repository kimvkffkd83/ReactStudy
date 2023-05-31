const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: "./src/index.tsx",
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
            staticOptions: {
                index: 'index.html',
            },
        },
        port: 4001,
        proxy: {
            '/api': {
                target: 'http://localhost:4000/',
                changeOrigin: true,
            }
        }
    },
    output: {
        filename: 'webpack.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-react", "@babel/preset-env"],
                        },
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                          compilerOptions: {
                            noEmit: false,
                          },
                        },
                    },
                  ],
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader'],
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:'file-loader'
            },
            {
                test:/\.txt$/,
                use:'raw-loader'
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: "./public/index.html", // 템플릿 위치
        }),
      ],
    resolve: {
        extensions: [".tsx", '...'],
    }
};