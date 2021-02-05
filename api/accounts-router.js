const express = require("express");

const router = express.Router();

const Accounts = require("./accounts-model");

//I will create the model file and import it here
//name it Accounts
//to that model file I will import the database and
//in model.js I will create my knex queries,
//which are in the shape of js functions.
//I will 'module-export' them from model.js to my router file
// and with them create my route handlers

router.get("/", (req, res) => {
  //remember to return a promise
  //get a list of accounts from the database
  Accounts.get()
    .then((accounts) => {
      res.status(200).json({ data: accounts });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const account = await Accounts.getById(id);
    res.status(200).json(account);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/:id", (req, res) => {});

router.put("/:id", (req, res) => {});

router.delete("/:id", async (req, res) => {
  //   try {
  //     const { id } = req.params;
  //     const account = await Accounts.remove(id);
  //     if (account) {
  //       console.log("an account has been found", account);
  //       res.status(200).json(account);
  //     } else {
  //       res.status(404).json({
  //         message: "no account with that id has been found",
  //         error: err.message,
  //       });
  //     }
  //   } catch (err) {
  //     res.status(500).json({ message: err.message });
  //   }
});

module.exports = router;
