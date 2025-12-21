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

const getSingleTodos = async (req: Request, res: Response) => {
  try {
    const result = await todoService.getSingleTodos(req.params.id as string);
    if (result.rows.length === 0) {
      res.status(404).json({
        status: false,
        message: "Todo is not found",
      });
    } else {
      res.status(200).json({
        status: true,
        message: "Todo fetched Successfully",
        data: result.rows[0],
      });
    }
  } catch (err: any) {
    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
};

const updateTodos = async (req: Request, res: Response) => {
  const { title } = req.body;
  try {
    const result = await todoService.updateTodos(
      title,
      req.params.id as string
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
};

const deleteTodos = async (req: Request, res: Response) => {
  try {
    const result = await todoService.deleteTodos(req.params.id as string);
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
};

export const todosController = {
  createTodos,
  getAllTodos,
  getSingleTodos,
  updateTodos,
  deleteTodos,
};
