const express = require("express");
const server = express();
const personRouter = require("./personrouter");

const port = process.env.PORT || 5000;
// console.log(someundefined);
server.use(express.json());
server.use("/person", personRouter);
server.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
