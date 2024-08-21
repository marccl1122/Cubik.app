import express from 'express';
import path from 'path';
import router from './routes';

const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../public')));

// Set the views directory and EJS as the templating engine
app.set('views', path.join(__dirname, '../src/views'));  // Point to the 'src/views' directory
app.set('view engine', 'ejs');

// Use the router for handling routes
app.use('/', router);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
