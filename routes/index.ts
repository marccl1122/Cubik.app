import express from 'express';

const router = express.Router();

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

export default router;
