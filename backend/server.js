import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { db } from "./connect.js"; 

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));



// Define API routes
// app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
