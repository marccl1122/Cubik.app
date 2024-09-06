import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { IUser, User } from '../models/user'; // Use the correct relative path to reach models folder
import bcrypt from 'bcrypt';



export const myStrategy = new LocalStrategy({
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

    // Manually assign _id to id (for compatibility with the IUser interface)
    return done(null, { ...user, id: user._id.toString() });
  } catch (err) {
    return done(err);
  }
});


export const serialize = (user: Express.User, done: any) => {
  done(null, (user as IUser).id.toString());
};
export const deserialize = async (id: string, done: any) => {
  try {
    const user = await User.findById(id).lean(); // Use lean() here as well
    if (user) {
      return done(null, { ...user, id: user._id.toString() });
    } else {
      return done(null, false);
    }
  } catch (err) {
    done(err);
  }
}

