import express, { Request, Response } from "express";
import initDB, { pool } from "./config/db";
import config from "./config";
import logger from "./middleware/logger";
import { userRoutes } from "./modules/user/user.route";
import { todosRoutes } from "./modules/todo/todo.route";

const app = express();
const port = config.port;

//parser

app.use(express.json());
app.use(express.urlencoded());

initDB();

app.get("/", logger, (req: Request, res: Response) => {
  res.send("Hello Next Level Developers!");
});

app.use("/users", userRoutes);
app.use("/todos", todosRoutes);

// Todo Delete

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
