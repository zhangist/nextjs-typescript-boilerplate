import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

const ANALYZE = (process.argv.indexOf('--analyze') > -1)

export default {
  distDir: '../dist',
  webpack: (config: any) => {
    if (ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true,
      }))
    }
    return config
  },
  exportPathMap: () => {
    return {
      '/': { page: '/index' },
      '/redux-write': { page: '/reduxWrite' },
      '/redux-read': { page: '/reduxRead' },
      '/mui': { page: '/mui' },
      '/ssr': { page: '/ssr' },
      '/about': { page: '/about' },
    }
  },
}
