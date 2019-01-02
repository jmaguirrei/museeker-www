
/*
  .babelrc is also need on the browser side for parcel to work
*/

process.env.NODE_ENV = 'development';

require('babel-register')({

  presets: [
    [ require.resolve('babel-preset-env'), { targets: { node: 'current' } } ],
    require.resolve('babel-preset-stage-2')
  ],

  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: [ './' ],
        alias: {
          '@jmaguirrei/belt': '../../../libs/belt/src/index.js',
          '@jmaguirrei/server': '../../../libs/server/src/index.js',
          '@jmaguirrei/store': '../../../libs/store/src/index.js',
          '@jmaguirrei/ui': '../../../libs/ui/src/index.js',
          '/lib': './src/lib',
          '/module': './src/module',
          '/public': './src/public',
          '/server': './src/server'
        },
      }
    ]
  ]

});

require('./src/server/index.js');
