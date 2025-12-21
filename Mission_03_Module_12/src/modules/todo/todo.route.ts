import { Router } from "express";
import { todosController } from "./todo.controller";
import { todo } from "node:test";

const router = Router();

router.post("/", todosController.createTodos);
router.get("/", todosController.getAllTodos);
router.get("/:id", todosController.getSingleTodos);

export const todosRoutes = router;
