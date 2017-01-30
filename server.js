const express = require('express');

const app = express();

app.use([
  express.static(__dirname),
  express.static(__dirname + '/img')
]);

// const port = process.env.PORT;
const port = 5000;
app.listen(port, () => console.log('server listening on port ' + port));