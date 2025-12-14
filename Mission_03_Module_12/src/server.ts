import { createServer, Server } from "http";
import { productRoute } from "./routes/product.route";

const server: Server = createServer((req, res) => {
  productRoute(req, res);
});

server.listen(8000, () => {
  console.log("Server is running on http://localhost:8000");
});
