export default {
  distDir: '../dist',
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
