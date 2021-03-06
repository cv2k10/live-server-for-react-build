var liveServer = require("live-server");
 
var params = {
    port: 5000, // Set the server port. Defaults to 8080. RUN localhost:5000, NOT 127.0.0.1:5000 FROM CHROME!
    host: "0.0.0.0", // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
    root: "./build", // Set root directory that's being served. Defaults to cwd.
    open: false, // When false, it won't load your browser by default. Can't use true, since it open 127.0.0.1 not localhost, cannot run from Chrome
    ignore: 'scss,my/templates', // comma-separated string for paths to ignore
    file: "index.html", // When set, serve this file (server root relative) for every 404 (useful for single-page applications)
    wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
    mount: [['/components', './node_modules']], // Mount a directory to a route.
    logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
    middleware: [function(req, res, next) { next(); }] // Takes an array of Connect-compatible middleware that are injected into the server middleware stack
};
liveServer.start(params);