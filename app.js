"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
const port = 3000;
// Serve static files
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, '.src/views'));
// Use routes
app.use('/', index_1.default);
// Start server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${3000}`);
});
