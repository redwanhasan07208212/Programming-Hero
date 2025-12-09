import type { IncomingMessage, ServerResponse } from "http";
import { readProductsFromDB } from "../services/product.service";
import type { IProduct } from "../types/product.interface";

export const productController = (
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
  }
};
