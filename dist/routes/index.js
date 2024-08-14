"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.render('./views/home');
});
router.get('/cubes', (req, res) => {
    res.render('cubes');
});
router.get('/algorithms', (req, res) => {
    res.render('algorithms');
});
router.get('/myprofile', (req, res) => {
    res.render('myprofile');
});
router.get('/mycubes', (req, res) => {
    res.render('mycubes');
});
exports.default = router;
