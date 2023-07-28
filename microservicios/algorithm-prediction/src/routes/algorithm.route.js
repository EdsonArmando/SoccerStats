"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = (0, express_1.Router)();
var algorithm_controller_1 = require("../controllers/algorithm.controller");
router.post('/prediction', algorithm_controller_1.prediction);
exports["default"] = router;
