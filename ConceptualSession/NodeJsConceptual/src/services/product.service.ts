import path from "path";
import fs from "fs";
const filePath = path.join(process.cwd(), "./src/database/database.json");

export function readProductsFromDB() {
  const data = fs.readFileSync(filePath, "utf-8");
  const products = JSON.parse(data);
  return products;
}
readProductsFromDB();
