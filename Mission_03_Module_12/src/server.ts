import { createServer, Server } from "http";
import { productRoute } from "./routes/product.route";

const server: Server = createServer((req, res) => {
  productRoute(req, res);
});

server.listen(8000, () => {
  console.log("Server is running on http://localhost:8000");
});
// logger middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}\n`);
  next();
};

app.get("/", logger, (req: Request, res: Response) => {
  res.send("Hello Next Level Developers!");
});
