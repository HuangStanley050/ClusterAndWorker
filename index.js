const express = require("express");
const app = express();

function doWork(duration) {
  const start = Date.now();
  while (Date.now() - start < duration) {}
}

app.get("/", (req, res) => {
  doWork(5000); //blocking in the event loop
  res.send("hello");
});

app.listen(3000, () => console.log("server running"));
