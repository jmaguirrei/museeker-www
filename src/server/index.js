

// Dependencies
import path from 'path';
import server from '@jmaguirrei/server';
import config from '../config.js';

const secretsFile = require('../../secrets.json');
const processEnv = process.env.NODE_ENV || 'development';
const configEnv = config.env[processEnv];

const { MONGO_URI } = secretsFile[processEnv];

server.init({
  env: {
    moduleName: 'www',
    mongoURI: MONGO_URI,
    rootFolder: path.join(__dirname, '/../../../_root'),
    ...configEnv,
  },
  config: {
    client: config.client,
    pages: [ 'home', 'agreements', 'faq' ],
    defaultPage: 'home',
  },
})
.then(() => {
  console.log('Server started, DB running...');
})
.catch(err => {
  console.log(err);
});
