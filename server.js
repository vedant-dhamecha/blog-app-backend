import express from "express";
import dotenv from "dotenv";
import path from "path";
import connectDB from "./config/db";
import {
  errorResponserHandler,
  invalidPathHandler,
} from "./middleware/errorHandler";

// Routes
import userRoutes from "./routes/userRoutes";

dotenv.config();
connectDB();
const app = express();
app.use(express.json());

app.get("/", (re, res) => {
  res.send("Server is running...");
});

app.use("/api/users", userRoutes);

// static assets
app.use("/uploads", express.static(path.join(__dirname,"/uploads")));

app.use(errorResponserHandler);

app.use(invalidPathHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running on port ${PORT}....`));
