import bcrypt from "bcryptjs";
import { pool } from "../../config/db";

const loginUserIntoDb = async (email: string, password: string) => {
  const user = await pool.query(`SELECT * FROM users WHERE email=$1`, [email]);

  const userPass = user.rows[0].password;
  const matchPassword = bcrypt.compare(password, userPass);
  if (!matchPassword) {
    throw new Error("Invalid Credentials");
  }
  delete user.rows[0].password;
  return user;
};

export const authService = {
  loginUserIntoDb,
};
