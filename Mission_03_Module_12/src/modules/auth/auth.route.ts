import { Router } from "express";

const route = Router();

route.post("/login");

export const authRouter = route;
