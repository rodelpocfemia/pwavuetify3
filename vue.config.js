module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pwa: {
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    //configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
        // swSrc is required in InjectManifest mode.
        swSrc: 'public/service-worker.js',
        // ...other Workbox options...
    },
    themeColor: '#17a2b8',
    msTileColor: '#000000',
    iconPaths: {
        msTileImage: 'img/icons/android-chrome-192x192.png'
    }
  },
  devServer: {
        open: process.platform === 'darwin',
        host: 'localhost',
        port: 8083, // CHANGE YOUR PORT HERE!
        https: false,
        hotOnly: false,
      },
}