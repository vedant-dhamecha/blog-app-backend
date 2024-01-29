import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";

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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running on port ${PORT}....`));
