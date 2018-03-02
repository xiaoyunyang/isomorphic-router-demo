// Include Babel
// it will parse all code that comes after it.
// (Not recommended for production use).

process.env.NODE_ENV = 'development';
require('babel-register')({
  ignore: /\/(build|node_modules)\//,
  presets: ['env', 'react-app']
});

require('./server.js');
