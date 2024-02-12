import mysql from "mysql2";
import bcrypt from "bcryptjs";

import { config } from "dotenv";

config();

const pool = mysql
  .createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  })
  .promise();

export async function checkRatUser(UserName, Password) {
  let sql = "SELECT * FROM Users WHERE UserName = ?";
  let data = [UserName];
  const [row] = await pool.query(sql, data);
  if (row.length == 0) {
    return {
      status: 0,
      content: "User Does not exist",
    };
  }
  if (row[0].Password == Password) {
    console.log("User Verified");
    return {
      status: 1,
      content: "User Verified",
    };
  } else {
    console.log("Hacker! Back Up Soldier Fire in the Hole!!!! ");
    return {
      status: -1,
      content: "User Password are incorrect!",
    };
  }
}

//   const result = await checkRatUser("Sammy","13");
//   console.log(result);
