const express = require("express");
const db = require("./db/dbinit");
const router = express.Router();

router.get("/", async (req, res) => {
  const people = await db("person");
  res.json({ people });
});

router.post("/", async (req, res) => {
  if (!req.body) {
    res.json({ message: "Insert a object with a 'name' field on it" });
  } else {
    await db("person").insert(req.body);
    res.json({ message: "Successfully inserted a person" });
  }
});

module.exports = router;
