"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("./config/db");
const cart_1 = __importDefault(require("./routes/cart"));
const order_1 = __importDefault(require("./routes/order"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
const corsOptions = {
    origin: ["http://localhost:5173"],
};
app.use(express_1.default.json());
app.use((0, cors_1.default)(corsOptions));
app.use("/api/cart", cart_1.default);
app.use("/api/order", order_1.default);
app.listen(PORT, () => {
    (0, db_1.connectToDb)();
    console.log(`Server started at port: ${PORT}`);
});
