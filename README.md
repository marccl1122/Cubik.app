
# Cubik - Rubik's Cube Algorithm Storage Page

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)
- [Screenshots](#screenshots)
- [Current Issues](#current-issues)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

## Project Overview
Cubik is a web application designed to store, display, and manage algorithms for solving Rubik's cubes. The application features a user-friendly interface where users can view different types of cubes, visualize the solving process in 3D, and manage their own collection of algorithms.

The project is built using Node.js and Express for the backend, with EJS templating for rendering the frontend. The application also features a responsive and minimalist design for an optimal user experience on all devices.

## Features
- **Algorithm Storage:** Save and manage algorithms for different types of Rubik's cubes.
- **3D Cube Visualization:** Visualize cube solving algorithms in a 3D environment.
- **User Profiles:** Manage user profiles and personalize algorithm collections.
- **Responsive Design:** The UI is optimized for both desktop and mobile devices.
- **Minimalist Design:** Clean and straightforward design focusing on usability.

## Technologies Used
- **Backend:** Node.js, Express
- **Frontend:** EJS, HTML, CSS, TypeScript, Tailwind CSS
- **3D Visualization:** Three.js
- **Database:** MongoDB (if implemented)
- **Version Control:** Git

## Project Structure
```
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
├── src/
│   ├── model/
│   │   └── User.ts
│   ├── routes/
│   │   ├── auth.ts
│   │   ├── index.ts
│   │   ├── login.ts
│   │   ├── mycubes.ts
│   ├── types/
│   │   └── session.d.ts
│   ├── views/
│   │   ├── partials/
│   │   ├── algorithms.ejs
│   │   ├── cubes.ejs
│   │   ├── home.ejs
│   │   ├── login.ejs
│   │   ├── mycubes.ejs
│   │   └── myprofile.ejs
│   ├── input.css
│   ├── app.ts
│   ├── passport.ts
│   ├── .env
│   ├── package.json
│   ├── README.md
│   └── tsconfig.json
└── dist/
    ├── app.js
    ├── views/
    ├── css/
    │   └── styles.css
```

## Installation
Follow these steps to get the project up and running on your local machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/cubik-project.git
   cd cubik-project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   npm start
   ```

4. **View the application:**
   Open your web browser and go to `http://localhost:3000`.

## Usage
### Running the Server
Start the Express server using the following command:
```bash
npm start
```

### Viewing Pages
- **Home Page:** `http://localhost:3000`
- **Cubes Page:** `http://localhost:3000/cubes`
- **Algorithms Page:** `http://localhost:3000/algorithms`
- **My Profile Page:** `http://localhost:3000/my-profile`
- **My Cubes Page:** `http://localhost:3000/my-cubes`

### Adding New Pages
To add new pages, simply create a new `.ejs` file in the views directory and add a corresponding route in `app.ts`.

## Routes
Here are the key routes and their corresponding views:
- `/`: Renders `home.ejs`.
- `/cubes`: Renders `cubes.ejs`.
- `/algorithms`: Renders `algorithms.ejs`.
- `/my-profile`: Renders `my-profile.ejs`.
- `/my-cubes`: Renders `my-cubes.ejs`.

## Screenshots
(Add screenshots of each page here for better understanding.)

## Current Issues
### Stylesheet Not Loading
We are currently facing an issue where the Tailwind CSS stylesheet is not loading correctly in the `.ejs` files. The server is returning a 404 error for the `styles.css` file.

This issue is under investigation, and further debugging steps are being taken to resolve it.

## Future Enhancements
- **Database Integration:** Store and manage user profiles, cubes, and algorithms in MongoDB.
- **User Authentication:** Implement user login and registration functionality with additional OAuth providers.
- **Social Features:** Allow users to share their algorithms with others.
- **Advanced 3D Visualization:** Enhance the 3D cube visualization with animations and more detailed controls.

## Contributing
Contributions are welcome! Please follow these steps to contribute:
1. Fork the project.
2. Create your feature branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.
