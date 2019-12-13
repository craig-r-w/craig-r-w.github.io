
//Only runs when the service worker has been physically changed or when a brand new one is created.
self.addEventListener( "install", (e) => {
	console.log("Service Worker: Installing.");
});

self.addEventListener( "activate", (e) => {
	console.log("Service Worker: Activated.");
});