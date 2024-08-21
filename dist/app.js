"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const port = 3000;
// Serve static files from the 'public' directory
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
// Set the views directory and EJS as the templating engine
app.set('views', path_1.default.join(__dirname, '../src/views')); // Point to the 'src/views' directory
app.set('view engine', 'ejs');
// Use the router for handling routes
app.use('/', routes_1.default);
// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
