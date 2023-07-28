module.exports = {
  apps : [{    
    script: "server.js",
    env_develop: {
      NAME: "develop-proyecto",
      NODE_ENV: "development",
      PORT: 5001
    },
    env_production: {
      NAME: "production-proyecto",
      NODE_ENV: "production",
      PORT: 5001
    }
  }]
};
