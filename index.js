const express = require("express");
const server = express();

const port = process.env.PORT || 5000;
server.get("/",(req,res) => {
    res.json({message:"Hello"});
})

server.listen( port ,() => {
    console.log(`server listening on port ${port}`)
})