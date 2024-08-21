"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.render('home');
});
router.get('/cubes', (req, res) => {
    res.render('cubes');
});
router.get('/algorithms', (req, res) => {
    res.render('algorithms');
});
router.get('/my-profile', (req, res) => {
    res.render('myprofile');
});
router.get('/my-cubes', (req, res) => {
    res.render('mycubes');
});
exports.default = router;
