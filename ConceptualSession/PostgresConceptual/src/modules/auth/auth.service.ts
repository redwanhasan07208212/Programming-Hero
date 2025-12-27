import bcrypt from "bcryptjs";
import { pool } from "../../config/db";
import jwt from "jsonwebtoken";
import config from "../../config";

const registerUserIntoDb = async (
  name: string,
  email: string,
  password: string
) => {
  // Check if user already exists
  const existingUser = await pool.query(`SELECT * FROM users WHERE email=$1`, [
    email,
  ]);

  if (existingUser.rows.length > 0) {
    throw new Error("User already exists");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Insert user into database
  const result = await pool.query(
    `INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email`,
    [name, email, hashedPassword]
  );

  return result.rows[0];
};
const loginUserIntoDb = async (email: string, password: string) => {
  const result = await pool.query(`SELECT * FROM users WHERE email=$1`, [
    email,
  ]);
  if (result.rows.length === 0) {
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
  registerUserIntoDb,
};
