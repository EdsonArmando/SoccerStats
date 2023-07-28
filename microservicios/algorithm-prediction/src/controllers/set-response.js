"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.setResponse = exports.errorResponse = void 0;
var errorResponse = function (res, error) {
    setResponse(res, {
        status: 501,
        msg: "Ha ocurrido un error inesperado",
        data: {
            error: error
        }
    });
};
exports.errorResponse = errorResponse;
function setResponse(res, response) {
    res.statusCode = response.status;
    res.json(__assign({}, response));
}
exports.setResponse = setResponse;
