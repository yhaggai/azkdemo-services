/**
 * Documentation: http://docs.azk.io/Azkfile.js
 */
var Path = require("path");
// Adds the systems that shape your system
systems({
  'nodejs': require(Path.resolve("./azk/nodejs.js"))(sync, persistent),
  'redis': require(Path.resolve("./azk/redis.js"))(sync, persistent)
});
