module.exports = {
    apps : [{
      name: "app",
      script: "./dist/main.js",
      env: {
        NODE_ENV: "development",
        PORT: 8080
      }
    }]
  }