const express = require('express');

const PORT = 3010;
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});