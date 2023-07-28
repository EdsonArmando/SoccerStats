"use strict";
exports.__esModule = true;
var http_1 = require("http");
var express_1 = require("express");
var cors_1 = require("cors");
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
var routes_1 = require("./routes");
// Create servers
var app = (0, express_1["default"])();
var server = (0, http_1.createServer)(app);
// Config
app.set("port", 8083);
app.set("json spaces", 2);
// Middlewares
app.use((0, cors_1["default"])());
app.use(express_1["default"].json({ limit: "50mb" }));
app.use(express_1["default"].urlencoded({ extended: false }));
// Routes
app.use("/", routes_1["default"]);
// Listen
server.listen(app.get("port"), function () {
    console.log("Servidor levantado en el puerto", app.get("port"));
});
