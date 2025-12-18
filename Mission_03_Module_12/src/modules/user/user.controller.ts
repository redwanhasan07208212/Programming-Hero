import { Request, Response } from "express";
import { userService } from "./user.service";
import { pool } from "../../config/db";

// * Create User Done

const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;

  try {
    const result = await userService.createUser(name, email);
    //console.log(result.rows[0]);
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

// * Get User Done

const getUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.getUser();
    res.status(200).json({
      success: true,
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

// * Single User Done

const singleUser = async (req: Request, res: Response) => {
  //console.log(req.params.id);
  try {
    const result = await userService.singleUser(req.params.id as string);
    // console.log(result.rows);
    if (result.rows.length === 0) {
      res.status(404).json({
        status: false,
        message: "User is not found",
      });
    } else {
      res.status(200).json({
        status: true,
        message: "User fetched Successfully",
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

// * Update User
const updateUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  try {
    const result = await userService.updateUser(
      name,
      email,
      req.params.id as string
    );
    if (result.rows.length === 0) {
      res.status(404).json({
        status: false,
        message: "User Not Found",
      });
    } else {
      res.status(201).json({
        status: true,
        message: "User Update Successfully",
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

const deleteUser = async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`DELETE FROM users WHERE id=$1`, [
      req.params.id,
    ]);
    if (result.rowCount === 0) {
      res.status(401).json({
        status: false,
        message: "User Not Found",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "User deleted successfully",
        data: result.rows,
      });
    }
  } catch (err: any) {
    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
};
export const userController = {
  createUser,
  getUser,
  singleUser,
  updateUser,
  deleteUser,
};
