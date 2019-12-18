const CompressionPlugin = require("compression-webpack-plugin");
const BrotliPlugin = require("brotli-webpack-plugin");
const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin");

if (process.env.NODE_ENV === "production") {
  module.exports = {
    css: {
      loaderOptions: {
        scss: {
          prependData: `@import "~@/designs/open-color.scss";`
        }
      }
    },
    configureWebpack: {
      plugins: [
        new CompressionPlugin({
          filename: "[path].gz[query]",
          algorithm: "gzip",
          test: /\.js$|\.css$|\.html$/,
          threshold: 10240,
          minRatio: 0.7
        }),
        new BrotliPlugin({
          asset: "[path].br[query]",
          test: /\.js$|\.css$|\.html$/,
          threshold: 10240,
          minRatio: 0.7
        }),
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, "dist"),
          routes: ["/"]
        })
      ],
      optimization: {
        splitChunks: {
          minSize: 10000,
          maxSize: 250000
        }
      }
    }
  };
} else {
  module.exports = {
    css: {
      loaderOptions: {
        scss: {
          prependData: `@import "~@/designs/open-color.scss";`
        }
      }
    }
  };
}
