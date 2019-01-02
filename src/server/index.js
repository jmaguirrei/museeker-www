

// Dependencies
// import _ from '@jmaguirrei/belt';
// import fs from 'fs';
import path from 'path';
import server from '@jmaguirrei/server';
import methods from '/server/api/methods';
import initServices from '/server/lib/services';
import { routes } from '/module/routes';

const nodeEnv = process.env.NODE_ENV || 'development';
const envFile = require('../../env.json');
const {
  HTTP_PORT,
  BASE_URL,
  MONGO_URI,
  SENDGRID_API_KEY,
} = envFile[nodeEnv];

initServices({ SENDGRID_API_KEY });

const config = {
  mongoURI: MONGO_URI,
  httpPort: HTTP_PORT,
  mongoCollection: 'www',
  baseUrl: BASE_URL,
  methods,
  routes,
  defaultRoute: '',
  distFolder: path.join(__dirname, '/../../dist'),
};

server.init(config)
.then(() => {
  console.log('Server started, DB running...');
})
.catch(err => {
  console.log(err);
});

