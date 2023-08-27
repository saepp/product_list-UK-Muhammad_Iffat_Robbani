import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const dbPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "product_list",
  port: 3306,
});

export default dbPool;
