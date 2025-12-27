import bcrypt from "bcryptjs";
import { pool } from "../../config/db";
import jwt from "jsonwebtoken";
import config from "../../config";
const loginUserIntoDb = async (email: string, password: string) => {
  const result = await pool.query(`SELECT * FROM users WHERE email=$1`, [
    email,
  ]);
  if (!result) {
    throw new Error("User is not Found");
  }

  const userPass = result.rows[0].password;
  const matchPassword = bcrypt.compare(password, userPass);
  const user = result.rows[0];

  if (!matchPassword) {
    throw new Error("Invalid Credentials");
  }
  const jwtPayload = {
    id: user.id,
    name: user.name,
    email: user.email,
  };
  const token = jwt.sign(jwtPayload, config.secret_key as string, {
    expiresIn: "7d",
  });
  delete user.password;
  return { token, user };
};

export const authService = {
  loginUserIntoDb,
};
