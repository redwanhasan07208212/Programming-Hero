import { Router } from "express";
import { todosController } from "./todo.controller";

const router = Router();

router.post("/", todosController.createTodos);

export const todosRoutes = router;
