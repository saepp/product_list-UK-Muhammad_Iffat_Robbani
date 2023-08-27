import dbPool from "../utils/db.js";
import { successRes, errorRes } from "../utils/response.js";

export const getProducts = async (req, res) => {
  try {
    const [data] = await dbPool.query("SELECT * FROM products");
    return successRes(res, "Products retrieved successfully", data);
  } catch (err) {
    return errorRes(res, err.message);
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, price, quantity } = req.body;
    const [data] = await dbPool.query(
      `INSERT INTO products (name, price, quantity) VALUES ('${name}', ${price}, ${quantity})`
    );
    return successRes(res, "Product created successfully", data);
  } catch (err) {
    return errorRes(res, err.message);
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, quantity } = req.body;
    const [data] = await dbPool.query(
      `UPDATE products SET name = '${name}', price = ${price}, quantity = ${quantity} WHERE id = ${id}`
    );
    return successRes(res, "Product updated successfully", data);
  } catch (err) {
    return errorRes(res, err.message);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const [data] = await dbPool.query(`DELETE FROM products WHERE id = ${id}`);
    return successRes(res, "Product deleted successfully", data);
  } catch (err) {
    return errorRes(res, err.message);
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const [data] = await dbPool.query(
      `SELECT * FROM products WHERE id = ${id}`
    );
    return successRes(res, "Product retrieved successfully", data);
  } catch (err) {
    return errorRes(res, err.message);
  }
};
