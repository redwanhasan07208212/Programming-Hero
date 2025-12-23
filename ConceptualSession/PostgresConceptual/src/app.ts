import express, { Request, Response } from "express";
import { pool } from "./config/db";
import { userRoute } from "./modules/user/user.route";
const app = express();

app.use(express.json());

app.post("/users", userRoute);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Hello Web Developer",
    path: req.path,
  });
});

export default app;
