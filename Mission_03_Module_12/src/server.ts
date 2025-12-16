import express, { Request, Response } from "express";
const app = express();
const port = 8000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Next Level Developers!");
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
