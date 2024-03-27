const express = require('express');
const serveIndex = require('serve-index');
const app = express();
const publicDir = __dirname + '/public';
app.use(express.static(publicDir));
app.use('/', serveIndex(publicDir, { icons: true }));
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server start to:  ${port}`);
});
