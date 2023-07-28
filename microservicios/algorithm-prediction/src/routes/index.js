"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = (0, express_1.Router)();
var algorithm_route_1 = require("./algorithm.route");
router.use('/algorithm', algorithm_route_1["default"]);
exports["default"] = router;
