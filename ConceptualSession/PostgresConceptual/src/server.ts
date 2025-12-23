import { Pool } from "pg";
import express, { Request, Response } from "express";
const app = express();

app.use(express.json());

const pool = new Pool();
app.post("/users", (req: Request, res: Response) => {
  console.log(req.body);
});

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Hello Web Developer",
    path: req.path,
  });
});

app.listen(8000, () => {
  console.log("Server is Running on port 8000");
});
