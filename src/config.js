
import store from '/client/store';
// import * as lib from '/client/lib';
// import * as components from '/client/ui/components';
// import * as fragments from '/client/ui/fragments';
import rootComponent from '/client/ui/Root';

export default {

  client: {
    store,
    rootComponent,
    // lib,
    // components,
    // fragments,
  },

  env: {

    development: {
      httpPort: 4001,
      socketPort: null,
      baseUrl: 'localhost',
      baseFolder: '',
      useServiceWorker: false,
      useManifest: false,
    },

    production: {
      httpPort: 4001,
      socketPort: null,
      baseUrl: 'museeker.io',
      baseFolder: 'base-www',
      useServiceWorker: true,
      useManifest: false,
    },

  },

};
