import express, { Request, Response } from "express";
import initDB from "./config/db";
import logger from "./middleware/logger";
import { userRoutes } from "./modules/user/user.route";
import { todosRoutes } from "./modules/todo/todo.route";
import { authRouter } from "./modules/auth/auth.route";

const app = express();

app.use(express.json());
app.use(express.urlencoded());

initDB();

app.get("/", logger, (req: Request, res: Response) => {
  res.send("Hello Next Level Developers!");
});

app.use("/users", userRoutes);
app.use("/todos", todosRoutes);
app.use("/auth", authRouter);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
    path: req.path,
  });
});

export default app;
