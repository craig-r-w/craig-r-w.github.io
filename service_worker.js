
//Only runs when the service worker has been physically changed or when a brand new one is created.
self.addEventListener( "install", (e) => {
	//Add all the rerlevant files to the cache.
	console.log("Service Worker: Installing.");
});

self.addEventListener( "activate", (e) => {
	console.log("Service Worker: Activated.");
});

self.addEventListener( "fetch", (e) => {
	//TODO add Cache.match
	console.log("Service Worker: Fetching resource.");
});