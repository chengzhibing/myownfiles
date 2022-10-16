const {
  Configuration
} = require("webpack")
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const {VueLoaderPlugin} = require("vue-loader")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin")

/** 
 * @type {Configuration}
 */

const config = {
  mode: 'development',
  entry: "./src/main.ts",
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.ts$/,  //解析ts
        loader: "ts-loader",
        options: {
            configFile: path.resolve(process.cwd(), 'tsconfig.json'),
            appendTsSuffixTo: [/\.vue$/]
        },
      }
    ]
  },
  resolve: {
    alias: {
     "@": path.resolve(__dirname, "./src"),
     "@pages":path.resolve(__dirname, "./src/pages"),
     "@assets": path.resolve(__dirname, "./src/assets")
    },
    extensions: [".js", ".vue", ".ts"]
  },
  output: {
    filename: "app.[hash].js",
    path: path.resolve(__dirname, "./dist")
  },
  stats: "errors-only",
  externals: { 
    vue: "Vue" //CDN 引入
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo:{ //美化样式
          messages:['You application is running here http://localhost:8080']
      }
    })
  ] 
}
module.exports = config;