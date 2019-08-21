const express = require("express");
const server = express();
const cors = require("cors");
const personRouter = require("./personrouter");

const port = process.env.PORT || 5000;
// console.log(someundefined);
server.use(express.json());
server.use(cors());
server.use("/person", personRouter);
server.get("/", (req, res) => {
  res.json({ message: "Hello" });
});
server.post("/formdata", (req, res) => {
  console.log(req.body, "body");
  res.json({ message: "recieved formdata" });
});

server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
