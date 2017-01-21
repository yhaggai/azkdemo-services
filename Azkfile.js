/**
 * Documentation: http://docs.azk.io/Azkfile.js
 */
var Path = require("path");
// Adds the systems that shape your system
systems({
  'azkdemo-nodejs': require(Path.resolve("./azk/azkdemo-nodejs.js"))(sync, persistent, path)
  // 'redis': require(path.resolve("./azk/azkdemo-nodejs.js")(sync, persistent))
});
