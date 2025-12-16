import express, { Request, Response } from "express";
import { Pool } from "pg";
const app = express();
const port = 8000;
//parser

app.use(express.json());
app.use(express.urlencoded());

const pool = new Pool({
  connectionString: `postgresql://neondb_owner:npg_5bWFqou6hcjO@ep-rough-darkness-a1rqae7x-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require`,
});
app.get("/", (req: Request, res: Response) => {
  res.send("Hello Next Level Developers!");
});
app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.status(201).json({
    success: true,
    message: "Api Working",
  });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// logger middleware
// const logger = (req: Request, res: Response, next: NextFunction) => {
//   console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}\n`);
//   next();
// };

// app.get("/", logger, (req: Request, res: Response) => {
//   res.send("Hello Next Level Developers!");
// });
