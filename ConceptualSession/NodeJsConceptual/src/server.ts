import { createServer, type Server } from "http";

const server: Server = createServer((req, res) => {
  console.log(req);
});
