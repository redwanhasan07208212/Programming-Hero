import type { IncomingMessage, ServerResponse } from "http";
import {
  readProductsFromDB,
  writeProductsToDB,
} from "../services/product.service";
import type { IProduct } from "../types/product.interface";
import { parseBody } from "../utility/parseBody";

export const productController = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const method = req.method;
  const url = req.url;
  const urlPart = url?.split("/");

  const id = urlPart && urlPart[1] === "products" ? Number(urlPart[2]) : null;

  if (method === "GET" && url === "/products") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        message: "This is Product Route",
        products: readProductsFromDB(),
      })
    );
  } else if (method === "GET" && id !== null) {
    const products = readProductsFromDB();
    const product = products.find((p: IProduct) => p.id === id);
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        message: "This is individual product route",
        data: product,
      })
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
        res.writeHead(201, { "content-type": "application/json" });
        res.end(
          JSON.stringify({
            message: "Product created successfully",
            data: newProduct,
          })
        );
      })
      .catch((error) => {
        res.writeHead(400, { "content-type": "application/json" });
        res.end(JSON.stringify({ error: "Invalid request body" }));
      });
  } else if (method === "PUT" && id !== null) {
    const body = await parseBody(req);
    const products = readProductsFromDB();
    const productIndex = products.findIndex((p: IProduct) => p.id === id);
    if (productIndex !== -1) {
      const updatedProduct = { id: products[productIndex].id, ...body };
      products[productIndex] = updatedProduct;
      writeProductsToDB(products);
      res.writeHead(200, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          message: "Product updated successfully",
          data: updatedProduct,
        })
      );
    } else {
      res.writeHead(404, { "content-type": "application/json" });
      res.end(JSON.stringify({ error: "Product not found" }));
    }
  } else if (method === "DELETE" && id !== null) {
    const products = readProductsFromDB();
    const productIndex = products.findIndex((p: IProduct) => p.id === id);
    if (productIndex !== -1) {
      products.splice(productIndex, 1);
      writeProductsToDB(products);
      res.writeHead(200, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          message: "Product deleted successfully",
        })
      );
    } else {
      res.writeHead(404, { "content-type": "application/json" });
      res.end(JSON.stringify({ error: "Product not found" }));
    }
  }
};
