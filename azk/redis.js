
module.exports = function (sync, persistent, path) {
  return {
    image: { docker: "redis" },
    export_envs: {
      "DATABASE_URL": "redis://#{net.host}:#{net.port[6379]}"
    },
    command: "redis-server --appendonly yes",
    mounts: {
      "/data": persistent("{system.name}-data"),
    }
  };
}