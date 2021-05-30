require('@babel/polyfill');
require('@babel/register')({
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  extensions: ['.ts', '.tsx', '.js', '.jsx'],
  plugins: [
    [
      'transform-assets',
      {
        extensions: ['css'],
        name: '/static/css/[name].[hash:8].[ext]',
      },
    ],
    [
      'file-loader',
      {
        name: '[name].[md4:hash:hex:8].[ext]',
        extensions: ['png', 'jpg', 'jpeg', 'gif', 'svg'],
        publicPath: '/static/media/',
        outputPath: '/static/media/',
        context: '',
        limit: 10000,
      },
    ],
  ],
});

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { Image } = require('canvas');
global.Image = Image;
const App = require('../src/App').default;

const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/*', (req, res, next) => {
  console.log(`Request URL = ${req.url}`);

  // TODO: Reference defined client routes
  if (req.url && req.url !== '/' && !req.url.startsWith('/thing')) {
    return next();
  }

  const reactApp = ReactDOMServer.renderToString(
    React.createElement(App, { location: { pathname: req.url } })
  );

  console.log(reactApp);

  const indexFile = path.resolve('build/index.html');

  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      const errMsg = `There is an error: ${err}`;
      console.error(errMsg);
      return res.status(500).send(errMsg);
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${reactApp}</div>`)
    );
  });
});

app.use(express.static(path.join(__dirname, '../build')));

app.listen(PORT, () =>
  console.log(`Express server is running on PORT: ${PORT}`)
);
