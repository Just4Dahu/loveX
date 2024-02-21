const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello, World! love meter');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
