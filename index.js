import express from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());

app.use("/products", productRoutes);

app.listen(8080, () => {
  console.log("Server is listening on http://localhost:8080");
});
