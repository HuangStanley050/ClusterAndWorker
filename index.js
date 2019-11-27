process.env.UV_THREADPOOL_SIZE = 1;
const cluster = require("cluster");

//ask is the file being exectuted in master mode?
if (cluster.isMaster) {
  //make index js exectute again in child mode
  cluster.fork();
  // cluster.fork();
  // cluster.fork();
  // cluster.fork();
} else {
  // am a child, act like a server
  const express = require("express");
  const app = express();
  const crypto = require("crypto");
  app.get("/", (req, res) => {
    crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
      res.send("Hello world");
    });
  });
  app.get("/fast", (req, res) => {
    res.send("this is fast");
  });
  app.listen(3000, () => console.log("server running"));
}
