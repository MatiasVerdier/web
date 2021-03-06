import webpack from "webpack";
import path from "path";
import CopyWebpackPlugin from "copy-webpack-plugin";

export default {
  module: {
    loaders: [
      {
        test: /\.((png)|(eot)|(woff)|(woff2)|(ttf)|(svg)|(gif))(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file?name=/[hash].[ext]"
      },
      {
        test: /\.json$/, loader: "json-loader"
      },
      {
        loader: "babel",
        test: /\.js?$/,
        exclude: /node_modules/,
        query: {cacheDirectory: true}
      }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      fetch: "imports?this=>global!exports?global.fetch!whatwg-fetch"
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "./_redirects"),
        to: path.join(__dirname, "dist")
      }
    ])
  ],

  context: path.join(__dirname, "src"),
  entry: {
    app: ["./js/app"],
    cms: ["./js/cms"]
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].js"
  },
  externals: [/^vendor\/.+\.js$/]
};
