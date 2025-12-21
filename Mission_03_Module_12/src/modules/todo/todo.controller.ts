import { Request, Response } from "express";
import { pool } from "../../config/db";
import { todoService } from "./todo.service";

const createTodos = async (req: Request, res: Response) => {
  const { user_id, title } = req.body;
  try {
    const result = await todoService.createTodo(user_id, title);
    res.status(201).json({
      status: true,
      message: "Data Inserted Successfully",
      data: result.rows[0],
    });
  } catch (err: any) {
    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
};

const getAllTodos = async (req: Request, res: Response) => {
  try {
    const result = await todoService.getAllTodos();
    res.status(201).json({
      status: true,
      message: "Data Fetched Successfully",
      data: result.rows,
    });
  } catch (err: any) {
    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
};

export const todosController = {
  createTodos,
  getAllTodos,
};
