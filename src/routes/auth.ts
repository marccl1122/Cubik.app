import express, { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import { IUser, User } from '../models/user';
import bcrypt from 'bcrypt';

const router = express.Router();

// Registration route
router.post('/register', async (req: Request, res: Response) => {
  const { email, password, name } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send('User with this email already exists.');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      email,
      password: hashedPassword,
      name,
      googleId: '' // leave empty for LocalStrategy users
    });

    // Save the user in the database
    await newUser.save();
    return res.redirect('/login');
  } catch (error) {
    console.error(error);
    return res.status(500).send('Server error.');
  }
});

// Login route
router.post('/login', (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('local', (err: any, user: IUser, info: any) => {
    if (err) return next(err);
    if (!user) {
      return res.status(400).send(info.message);
    }

    req.login({ ...user, id: user.id.toString() }, (err) => {
      if (err) return next(err);
      return res.redirect('/');
    });
  })(req, res, next);
});

// Logout route
router.get('/logout', (req: Request, res: Response, next: NextFunction) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect('/login');
  });
});

export default router;
