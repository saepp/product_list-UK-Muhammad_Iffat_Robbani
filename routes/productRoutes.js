import express from "express";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "../controllers/ProductControllers.js";

const productRoutes = express.Router();

productRoutes.get("/", getProducts);
productRoutes.post("/", createProduct);
productRoutes.put("/:id", updateProduct);
productRoutes.delete("/:id", deleteProduct);
productRoutes.get("/:id", getProductById);

export default productRoutes;
