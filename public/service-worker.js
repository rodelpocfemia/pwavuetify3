
/*************************************Caching / Offline Access**************************************************/
//TODO, handler for workbox.broadcastUpdate 
/*
workbox.routing.registerRoute(
  new RegExp('.*\/api/MessageBoard'),  
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'api_StaleWhileRevalidate',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 50
      })
    ]
  }),
); 
*/

workbox.routing.registerRoute(
    new RegExp('.*\/api/User/login'),  
    workbox.strategies.networkOnly({
      cacheName: 'api_networkOnly',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 50
        })
      ]
    }),
  ); 
  
  workbox.routing.registerRoute(
      new RegExp('.*\/api/*'),  //will match all API GET routes
      workbox.strategies.networkFirst({
        cacheName: 'api_networkFirst',
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 50
          })
        ]
      }),
    ); 
  
  
  /*************************************background sync (POST API) ***********************************************/
  /*
  const bgSyncPlugin = new workbox.backgroundSync.Plugin('postQueue', {
    maxRetentionTime: 24 * 60 // Retry for max of 24 Hours
  });
  workbox.routing.registerRoute( 
    new RegExp('.*\/api/*'),
    new workbox.strategies.NetworkOnly({
      plugins: [bgSyncPlugin],
    }),
    'POST'
  );
  */
  
  workbox.skipWaiting();
  workbox.clientsClaim();
  
   /*************************************pre defined sw***********************************************/
  self.__precacheManifest = [].concat(self.__precacheManifest || []);
  workbox.precaching.suppressWarnings();
  workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
  