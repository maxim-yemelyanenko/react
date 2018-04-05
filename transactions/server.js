/**
 * This is just a dummy server to facilidate our React SPA examples.
 * For a more professional setup of Express, see...
 * http://expressjs.com/en/starter/generator.html
 */

import express from 'express';
import path from 'path';
const app = express();


/**
 * Anything in public can be accessed statically without
 * this express router getting involved
 */

app.use(express.static(path.join(__dirname, 'public'), {
  dotfiles: 'ignore',
  index: false
}));


/**
 * Always serve the same HTML file for all requests
 */

app.get('*', function(req, res, next) {
  console.log('Request: [GET]', req.originalUrl)
  res.sendFile(path.resolve(__dirname, 'index.html'));
});


/**
 * Start Server
 */

const port = 10000;
app.listen(port, () => {
    console.log('Server started on port: ' + port);
});