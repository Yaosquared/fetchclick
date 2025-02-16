import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectToDb } from "./config/db";
import cartRouter from "./routes/cart";
import orderRouter from "./routes/order";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
const corsOptions = {
  origin: `${process.env.CLIENT_URL}`,
  optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));

app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.listen(PORT, () => {
  connectToDb();
  console.log(`Server started at port: ${PORT}`);
});
