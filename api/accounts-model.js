const express = require("express");

const db = require("../data/dbConfig.js");

module.exports = {
  get,
  getById,
  post,
  update,
  remove,
};

function get() {
  return db("accounts");
}

function getById(id) {
  return db("accounts").where({ id });
}

function post(account) {
  return db("accounts")
    .insert(account, "id")
    .then((ids) => ({ id: ids[0] }));
}

function update() {}

function remove(id) {
  db("accounts").where("id", Number(id)).del();
}
