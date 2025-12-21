import { pool } from "../../config/db";

const createTodo = async (user_id: string, title: string) => {
  const result = await pool.query(
    `INSERT INTO todos(user_id,title) VALUES($1,$2) RETURNING * `,
    [user_id, title]
  );
  return result;
};

const getAllTodos = async () => {
  const result = await pool.query(`SELECT * FROM todos`);
  return result;
};

const getSingleTodos = async (id: string) => {
  const result = await pool.query(`SELECT * FROM todos WHERE id=$1`, [id]);

  return result;
};

const updateTodos = async (title: string, id: string) => {
  const result = await pool.query(
    `UPDATE todos SET title=$1 WHERE id=$2 RETURNING *`,
    [title, id]
  );

  return result;
};

const deleteTodos = async (id: string) => {
  const result = await pool.query(`DELETE FROM todos WHERE id=$1`, [id]);

  return result;
};
export const todoService = {
  createTodo,
  getAllTodos,
  getSingleTodos,
  updateTodos,
  deleteTodos,
};
