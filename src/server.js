"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
app.listen('3300', function () {
    console.log('api running on port: 3300');
});
