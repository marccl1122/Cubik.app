import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { IUser, User } from '../src/models/user';
import bcrypt from 'bcrypt';

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, async (email, password, done) => {
  try {
    // Use lean() to get a plain JavaScript object instead of a Mongoose Document
    const user = await User.findOne({ email }).lean();
    if (!user) {
      return done(null, false, { message: 'Incorrect email.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return done(null, false, { message: 'Incorrect password.' });
    }

    // Manually assign _id to id
    return done(null, { ...user, id: user._id.toString() });
  } catch (err) {
    return done(err);
  }
}));
passport.serializeUser((user: Express.User, done) => {
    // Use type assertion to cast `user` to `IUser` or `any` if necessary
    done(null, (user as IUser).id.toString());
  });
  passport.deserializeUser(async (id: string, done) => {
    try {
      const user = await User.findById(id).exec();
      if (user) {
        // Manually assign _id to id for the user object
        return done(null, { ...user.toObject(), id: user.id.toString() });
      } else {
        return done(null, false);
      }
    } catch (err) {
      done(err);
    }
  });