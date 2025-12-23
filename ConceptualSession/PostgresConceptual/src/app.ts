import express, { Request, Response } from "express";
import { pool } from "./config/db";
const app = express();

app.use(express.json());

app.post("/users", async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const result = await pool.query(
      `INSERT INTO users(name,email,password) VALUES($1,$2,$3) RETURNING *`,
      [name, email, password]
    );
    res.status(201).json({
      success: true,
      message: "User created Successfully",
      data: result.rows[0],
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Hello Web Developer",
    path: req.path,
  });
});

export default app;
