const express = require('express');
const app = express();
const port = 3000;


// Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/', (req, res) => {
  console.log(json);
  res.send('Got a post');
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
