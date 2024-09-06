import express from 'express';
import path from 'path';
import router from './routes'; // Import your routes
import session from 'express-session';
import passport from 'passport';
import flash from 'connect-flash';

import { myStrategy, serialize, deserialize} from "./config/passport"

const app = express();
const port = process.env.PORT || 3000;

// Middleware setup
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: true,
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

passport.use(myStrategy)
passport.serializeUser(serialize)
passport.deserializeUser(serialize)



// Set views directory and view engine
app.set('views', path.join(__dirname, '../src/views'));
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

// Use the router for all routes
app.use('/', router);  // Ensure the router is being used

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

