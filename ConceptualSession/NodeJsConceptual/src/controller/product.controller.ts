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
  }
};
