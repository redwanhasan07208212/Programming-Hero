import type { IncomingMessage, ServerResponse } from "http";

export const productRoute = (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;
  const method = req.method;
  if (url === "/" && method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Welcome to the Product API" }));
  } else if (url === "/products" && method === "GET") {
    // In a real application, you would fetch this data from a database
    const products = [
      { id: 1, name: "T-shirt", color: "Red" },
      { id: 2, name: "T-shirt", color: "Green" },
      { id: 3, name: "T-shirt", color: "Blue" },
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
};
