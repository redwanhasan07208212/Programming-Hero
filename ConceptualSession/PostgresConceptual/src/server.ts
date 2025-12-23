import { Pool } from "pg";
import express, { Request, Response } from "express";
const app = express();

app.use(express.json());

const pool = new Pool({
  connectionString:
    "postgresql://neondb_owner:npg_5mMOuGHbXe4R@ep-super-butterfly-a81fkofu-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require",
});

const initDB = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(250) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    age INT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
    )
    `);
};
initDB();

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

app.listen(8000, () => {
  console.log("Server is Running on port 8000");
});
