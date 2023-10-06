const express = require("express");
const router = require("./routes/index.js");
const morgan = require("morgan");
const cors = require("cors");
const routes = require ("./routes/index.js")

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());
server.use(router);

//server.use ('/',routes)

module.exports = server;
