
module.exports = function (sync, persistent, path) {
  return {
    // Dependent systems
    depends: ['redis'],
    // More images:  http://images.azk.io
    image: {'docker': 'node:6.9.1'},
    // Steps to execute before running instances
    provision: [
      "npm install",
    ],
    workdir: "/azk/code",
    shell: "/bin/bash",
    command: "npm start",
    wait: 10000,
    mounts: {
      '/azk/code': sync("./nodejs"),
      '/azk/code/node_modules': persistent("#{system.name}-node_modules"),
    },
    http: {
      domains: [ "#{system.name}.#{azk.default_domain}" ]
    },
    envs: {
      // set instances variables
      NODE_ENV: "dev",
    }
  };
}