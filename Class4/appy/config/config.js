var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'appy'
    },
    port: 3000,
    db: 'mongodb://localhost/appy-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'appy'
    },
    port: 3000,
    db: 'mongodb://localhost/appy-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'appy'
    },
    port: 3000,
    db: 'mongodb://localhost/appy-production'
  }
};

module.exports = config[env];
