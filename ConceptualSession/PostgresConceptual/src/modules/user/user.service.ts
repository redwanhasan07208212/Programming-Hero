import bcrypt from "bcryptjs";
import { pool } from "../../config/db";

const createUser = async (payload: Record<string, unknown>) => {
  const { name, email, role, password } = payload;
  const hashPassword = await bcrypt.hash(password as string, 12);
  const result = await pool.query(
    `INSERT INTO users(name,email,role,password) VALUES($1,$2,$3,$4) RETURNING *`,
    [name, email, role, hashPassword]
  );
  delete result.rows[0].password;
  return result;
};

export const userService = {
  createUser,
};
