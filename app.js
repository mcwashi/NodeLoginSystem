const express = require("express");
const mysql = require("mysql");

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>")
});

app.listen(5001, () => {
    console.log("Server started on port 5001")
});