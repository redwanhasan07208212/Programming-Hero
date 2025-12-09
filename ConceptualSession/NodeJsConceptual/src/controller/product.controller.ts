import type { IncomingMessage, ServerResponse } from "http";
import { readProductsFromDB } from "../services/product.service";

export const productController = (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const method = req.method;
  const url = req.url;

  if (method === "GET" && url === "/products") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ products: readProductsFromDB() }));
  }
};
