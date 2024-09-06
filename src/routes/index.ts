import { Router } from 'express';
import passport from 'passport';
import { ensureAuthenticated } from '../middleware/auth';

const router = Router();

router.use((req, res, next)=> {
  req.app.locals =  {
    error_msg: null
  }
  next()
});


// Show the login page
router.get('/login', (req, res) => {
  res.render('login');
});

// Show the registration page
router.get('/register', (req, res) => {
  res.render('register');
});

// Handle login
router.post('/login', passport.authenticate('local', {
  successRedirect: '/home',
  failureRedirect: '/login',
  failureFlash: true,
}));

// Handle registration (assuming you have User model and registration logic)
router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  // Add your user creation logic here
  // Example: let user = await User.create({ email, password: hashedPassword });
  req.flash('success_msg', 'You are now registered and can log in');
  res.redirect('/login');
});

// Home page (protected)
router.get('/home', ensureAuthenticated, (req, res) => {
  res.render('home');
});

// Cubik app pages (protected)
router.get('/cubes', ensureAuthenticated, (req, res) => {
  res.render('cubes');
});

router.get('/algorithms', ensureAuthenticated, (req, res) => {
  res.render('algorithms');
});

router.get('/myprofile', ensureAuthenticated, (req, res) => {
  res.render('myprofile');
});

router.get('/mycubes', ensureAuthenticated, (req, res) => {
  res.render('mycubes');
});

export default router;
