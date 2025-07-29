import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'production',
  entry: './src/main.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/js/[name]-[contenthash].js',
    chunkFilename: 'assets/js/[name]-[contenthash].js',
    assetModuleFilename: 'assets/[ext]/[name]-[hash][ext]',
    clean: true,
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    mainFiles: ['index', 'index.js', 'index.jsx'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@assets': path.resolve(__dirname, './public')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }],
              ['@babel/preset-react', { runtime: 'automatic' }]
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[name]-[hash][ext]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name]-[hash][ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name]-[contenthash].css',
      chunkFilename: 'assets/css/[name]-[contenthash].css'
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
          name: 'vendor',
          chunks: 'all'
        },
        i18n: {
          test: /[\\/]node_modules[\\/](i18next|react-i18next|i18next-browser-languagedetector)[\\/]/,
          name: 'i18n',
          chunks: 'all'
        },
        animations: {
          test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
          name: 'animations',
          chunks: 'all'
        },
        icons: {
          test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
          name: 'icons',
          chunks: 'all'
        }
      }
    }
  },
  devServer: {
    port: 5173,
    hot: true,
    historyApiFallback: true
  }
};