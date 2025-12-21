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

// Todo update
app.put("/todos/:id", async (req: Request, res: Response) => {
  const { title } = req.body;
  try {
    const result = await pool.query(
      `UPDATE todos SET title=$1 WHERE id=$2 RETURNING *`,
      [title, req.params.id]
    );
    if (result.rows.length === 0) {
      res.status(404).json({
        status: false,
        message: "Todo is not found",
      });
    } else {
      res.status(200).json({
        status: true,
        message: "Todo Updated Successfully",
        data: result.rows[0],
      });
    }
  } catch (err: any) {
    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
});

// Todo Delete
app.delete("/todos/:id", async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`DELETE FROM todos WHERE id=$1`, [
      req.params.id,
    ]);
    if (result.rowCount === 0) {
      res.status(404).json({
        status: false,
        message: "Todo is not found",
      });
    } else {
      res.status(200).json({
        status: true,
        message: "Todo Deleted Successfully",
        data: result.rows[0],
      });
    }
  } catch (err: any) {
    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
