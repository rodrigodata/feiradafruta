const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/api/v1/pedidos", (req, res) => {
    res.json({ msg: "pedidos!!" });
});

module.exports = app;