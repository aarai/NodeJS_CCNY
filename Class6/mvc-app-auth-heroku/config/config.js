var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'mvc-app'
    },
    port: 3000,
    db: 'mongodb://localhost/mvc-app-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'mvc-app'
    },
    port: 3000,
    db: 'mongodb://localhost/mvc-app-test'
  },

  production: {
    root:  rootPath,
    app: {
      name: 'mvc-app'
    },
    port: process.env.PORT,
    db: 'mongodb://<user>:<password>@ds053964.mongolab.com:53964/mvc-app'
  }
};

module.exports = config[env];
