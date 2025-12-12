import type { IncomingMessage, ServerResponse } from "http";
import {
  readProductsFromDB,
  writeProductsToDB,
} from "../services/product.service";
import type { IProduct } from "../types/product.interface";
import { parseBody } from "../utility/parseBody";
import { sendResponse } from "../utility/sendResponse";

export const productController = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const method = req.method;
  const url = req.url;
  const urlPart = url?.split("/");

  const id = urlPart && urlPart[1] === "products" ? Number(urlPart[2]) : null;

  if (method === "GET" && url === "/products") {
    const products = readProductsFromDB();
    return sendResponse(
      res,
      200,
      true,
      products,
      "Products retrieved successfully"
    );
  } else if (method === "GET" && id !== null) {
    const products = readProductsFromDB();
    const product = products.find((p: IProduct) => p.id === id);
    return sendResponse(
      res,
      200,
      true,
      product,
      "Individual Product retrieved successfully"
    );
  } else if (method === "POST" && url === "/products") {
    await parseBody(req)
      .then((body) => {
        const products = readProductsFromDB();
        const newProduct: IProduct = {
          id: products.length + 1,
          ...body,
        };
        products.push(newProduct);
        writeProductsToDB(products);
        return sendResponse(
          res,
          200,
          true,
          newProduct,
          "Product created successfully"
        );
      })
      .catch((error) => {
        return sendResponse(res, 400, false, error, "Invalid JSON body");
      });
  } else if (method === "PUT" && id !== null) {
    const body = await parseBody(req);
    const products = readProductsFromDB();
    const productIndex = products.findIndex((p: IProduct) => p.id === id);
    if (productIndex !== -1) {
      const updatedProduct = { id: products[productIndex].id, ...body };
      products[productIndex] = updatedProduct;
      writeProductsToDB(products);
      return sendResponse(
        res,
        200,
        true,
        updatedProduct,
        "Product updated successfully"
      );
    } else {
      return sendResponse(res, 404, false, null, "Product not found");
    }
  } else if (method === "DELETE" && id !== null) {
    const products = readProductsFromDB();
    const productIndex = products.findIndex((p: IProduct) => p.id === id);
    if (productIndex !== -1) {
      products.splice(productIndex, 1);
      writeProductsToDB(products);
      return sendResponse(res, 200, true, null, "Product deleted successfully");
    } else {
      return sendResponse(res, 404, false, null, "Product not found");
    }
  }
};
