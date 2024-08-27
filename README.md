Cubik - Rubik's Cube Algorithm Storage Page
Table of Contents
Project Overview
Features
Technologies Used
Project Structure
Installation
Usage
Routes
Screenshots
Future Enhancements
Contributing
License
Project Overview
Cubik is a web application designed to store, display, and manage algorithms for solving Rubik's cubes. The application features a user-friendly interface where users can view different types of cubes, visualize the solving process in 3D, and manage their own collection of algorithms.

The project is built using Node.js and Express for the backend, with EJS templating for rendering the frontend. The application also features a responsive and minimalist design for an optimal user experience on all devices.

Features
Algorithm Storage: Save and manage algorithms for different types of Rubik's cubes.
3D Cube Visualization: Visualize cube solving algorithms in a 3D environment.
User Profiles: Manage user profiles and personalize algorithm collections.
Responsive Design: The UI is optimized for both desktop and mobile devices.
Minimalist Design: Clean and straightforward design focusing on usability.
Technologies Used
Backend: Node.js, Express
Frontend: EJS, HTML, CSS, TypeScript
3D Visualization: Three.js
Database: MongoDB (if implemented)
Version Control: Git
Project Structure
arduino
Copy code
Cubik-Project/
├── public/
│   ├── css/
│   │   └── styles.css
│   └── js/
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── home.ejs
│   ├── cubes.ejs
│   ├── algorithms.ejs
│   ├── my-profile.ejs
│   └── my-cubes.ejs
├── app.js
├── package.json
└── README.md
public/: Contains static assets like CSS and JavaScript files.
views/: Contains EJS templates for different pages.
app.js: Main application file where the Express server is set up.
package.json: Lists the dependencies and scripts for the project.
Installation
Follow these steps to get the project up and running on your local machine:

Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/cubik-project.git
cd cubik-project
Install dependencies:

bash
Copy code
npm install
Run the application:

bash
Copy code
node app.js
View the application:

Open your web browser and go to http://localhost:3000.

Usage
Running the Server
Start the Express server using the following command:

bash
Copy code
node app.js
Viewing Pages
Home Page: http://localhost:3000
Cubes Page: http://localhost:3000/cubes
Algorithms Page: http://localhost:3000/algorithms
My Profile Page: http://localhost:3000/my-profile
My Cubes Page: http://localhost:3000/my-cubes
Adding New Pages
To add new pages, simply create a new .ejs file in the views directory and add a corresponding route in app.js.

Routes
Here are the key routes and their corresponding views:

/: Renders home.ejs.
/cubes: Renders cubes.ejs.
/algorithms: Renders algorithms.ejs.
/my-profile: Renders my-profile.ejs.
/my-cubes: Renders my-cubes.ejs.
Screenshots
(You can add screenshots of each page here for better understanding.)

Future Enhancements
Database Integration: Store and manage user profiles, cubes, and algorithms in MongoDB.
User Authentication: Implement user login and registration functionality.
Social Features: Allow users to share their algorithms with others.
Advanced 3D Visualization: Enhance the 3D cube visualization with animations and more detailed controls.
Contributing
Contributions are welcome! Please follow these steps to contribute:

Fork the project.
Create your feature branch (git checkout -b feature/new-feature).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/new-feature).
Open a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for more details.
Essential Dependencies
Express: Web framework for Node.js.
EJS: Embedded JavaScript templates for rendering HTML.
Three.js: Library for 3D graphics on the web.
Body-parser: Middleware to handle request bodies.
Mongoose: (Optional, if using MongoDB) ORM for MongoDB.
Dev Dependencies
TypeScript: Superset of JavaScript that adds static typing.
@types/express: Type definitions for Express.
@types/node: Type definitions for Node.js.
Nodemon: Utility for automatically restarting the node application when file changes are detected.
