// Set up ======================================================================
// get all the tools we need
import express from 'express';
import http from 'http';
import logger from 'morgan';
import path from 'path';
import renderRouterMiddleware from '../iso-middleware/renderRoute';

require('dotenv').config();

// Configuration ===============================================================
const app = express();
app.set('port', process.env.PORT || 8080);
app.use(logger('short'));

const buildPath = path.join(path.resolve('.'), '/build');
app.use('/', express.static(buildPath));

app.use(express.static(__dirname));
app.get('*', renderRouterMiddleware);

// launch ======================================================================
// Starts the Express server on port 3001 and logs that it has started
http.createServer(app).listen(app.get('port'), () => {
  console.log(`Express server started at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});

module.exports = app;
