import { Router } from 'express';

const router = Router();

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

export default router;
