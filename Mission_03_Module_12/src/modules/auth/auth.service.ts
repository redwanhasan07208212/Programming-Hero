import bcrypt from "bcryptjs";
import { pool } from "../../config/db";

const login = async (email: string, password: string) => {
  const result = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);
  if (result.rows.length === 0) {
    return null;
  }
  const user = result.rows[0];
  const matchPass = await bcrypt.compare(password, user.password);
  if (!matchPass) {
    return false;
  }
};
