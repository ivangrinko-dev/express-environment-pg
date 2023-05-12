const express = require(`express`);
const bodyParser = require(`body-parser`);
const enviroment = require(`./controller/environment.controller`);

const app = express();

app.use(bodyParser.json());

app.use(`/enviroment`, enviroment);

app.use((error, req, res, _next) => res.send(error.message));

module.exports = app;
