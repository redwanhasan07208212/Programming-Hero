import express, { Request, Response } from "express";

import { userRoute } from "./modules/user/user.route";
import { authRouter } from "./modules/auth/auth.route";
const app = express();

app.use(express.json());

app.use("/api/v1/users", userRoute);
app.use("/api/v1/auth", authRouter);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Hello Web Developer",
    path: req.path,
  });
});

export default app;
