const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { separator } = require("./utils/constant");
const { getEntryTemplate } = require("./utils/helper");

// 将packages拆分成为数组['editor','home']
const packages = process.env.packages.split(separator);

// 调用getEntryTemplate获得对应的entry和htmlPlugins
const { entry, htmlPlugins } = getEntryTemplate(packages);

module.exports = {
  entry, //动态入口文件
  resolve: {
    alias: {
      //配置别名
      "@src": path.resolve(__dirname, "../src"),
      "@packages": path.resolve(__dirname, "../src/packages"),
      "@containers": path.resolve(__dirname, "../src/containers"),
    },
    mainFiles: ["index", "main"],
    extensions: [".ts", ".tsx", ".scss", "json", ".js"],
  },
  module: {
    rules: [
      {
        // 同时认识ts jsx js tsx 文件
        test: /\.(t|j)sx?$/,
        use: "babel-loader",
      },
      {
        // webpack5内置loader处理对应的文件资源
        test: /\.(png|jpe?g|svg|gif)$/,
        type: "assets/inline",
      },
      {
        // webpack5内置loader处理对应的文件资源
        test: /\.(eot|ttf|woff|woff2)$/,
        type: "assets/resource",
        generator: {
          filename: "fonts/[hash][ext][query]",
        },
      },
      {
        test: /\.(sa|sc)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "postcss-loader",
          {
            loader: "resolve-url-loader",
            options: {
              keepQuery: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "assets/[name].css",
    }),
    // 动态生成对应的htmlPlugins
    ...htmlPlugins,
  ],
};
