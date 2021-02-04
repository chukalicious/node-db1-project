const express = require("express");

const db = require("../data/dbConfig.js");

const router = express.Router();

router.get("/", (req, res) => {
  //remember to return a promise
  //get a list of accounts from the database
  //select * from accounts
  db.select("accounts")
    .then((accounts) => {
      res.status(200).json({ data: accounts });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });

  //   res.status(200).json({ message: "some response" });
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const accounts = await db.getById(id);
    res.status(200).json(accounts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/:id", (req, res) => {});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;
