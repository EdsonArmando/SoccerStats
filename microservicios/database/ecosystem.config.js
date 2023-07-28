module.exports = {
  apps : [{    
    script: "server.js",
    env_develop: {
      name: "develop-practica34",
      NODE_ENV: "development",
      PORT: 4410
    },
    env_production: {
      name: "production-practica34",
      NODE_ENV: "production",
      PORT: 4420
    }
  }]
};
