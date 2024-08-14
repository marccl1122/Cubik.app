import express from 'express';
import path from 'path';
import router from '../routes';

const app = express();
const port = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));



// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));


app.use(router)


// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${3000}`);
});
