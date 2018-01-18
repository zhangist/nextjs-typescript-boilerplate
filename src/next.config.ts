import * as autoprefixer from 'autoprefixer'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

const analyze = (process.argv.indexOf('--analyze') > -1)

export default {
  distDir: '../dist',
  webpack: (config: any) => {
    if (analyze) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true,
      }))
    }
    // config.resolve = config.resolve || {}
    // config.resolve.extensions = config.resolve.extensions || []
    // if (config.resolve.extensions.indexOf('.css') === -1) {
    //   config.resolve.extensions.push('.css')
    // }
    // if (config.resolve.extensions.indexOf('.styl') === -1) {
    //   config.resolve.extensions.push('.styl')
    // }
    // config.module = config.module || {}
    // config.module.loaders = config.module.loaders || []
    // config.module.loaders.push({
    //   test: /\.styl$/,
    //   use: [
    //     'style-loader',
    //     'css-loader',
    //     {
    //       loader: 'postcss-loader',
    //       options: {
    //         sourceMap: true,
    //         plugins: () => [
    //           autoprefixer({ browsers: ['> 5%'] }),
    //         ],
    //       },
    //     },
    //     'stylus-loader',
    //   ],
    // })
    return config
  },
  exportPathMap: () => {
    return {
      '/': { page: '/index' },
      '/redux-write': { page: '/reduxWrite' },
      '/redux-read': { page: '/reduxRead' },
      '/mui': { page: '/mui' },
      '/about': { page: '/about' },
    }
  },
}
