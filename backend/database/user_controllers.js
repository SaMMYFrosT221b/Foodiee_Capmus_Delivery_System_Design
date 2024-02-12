import mysql from "mysql2";
import bcrypt from "bcryptjs";
const JWT_SECRET = "anant";
import jwt from "jsonwebtoken";

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

export async function createUser(userData) {
  // Hashing the password
  // Check if required fields are present
  if (
    !userData.Name ||
    !userData.UserName ||
    !userData.Password ||
    !userData.Email ||
    !userData.UserType
  ) {
    return "Name, UserName, Password, Email, and UserType are required for user creation.";
  }

  // Check if the UserName is unique
  const existingUser = await pool.query(
    "SELECT * FROM Users WHERE UserName = ?",
    [userData.UserName]
  );
  if (existingUser[0].length > 0) {
    return "Username is already taken. Please choose a different one.";
  }
  let hashedPass = await bcrypt.hash(userData.Password, 10);

  const [row] = await pool.query(
    "INSERT INTO Users (Name, UserName,Password, PhoneNo, Email, UserType,AddressLine1,AddressLine2,City,State,PostalCode, Country) VALUES  (?, ?,  ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      userData.Name,
      userData.UserName,
      hashedPass,
      userData.PhoneNo,
      userData.Email,
      userData.UserType,
      userData.AddressLine1,
      userData.AddressLine2,
      userData.City,
      userData.State,
      userData.PostalCode,
      userData.Country,
    ]
  );
  const result = await getUser(row.insertId);
  return result;
}

export async function getUser(id) {
  const [row] = await pool.query("SELECT * FROM Users WHERE UserID =?", [id]);
  return row[0];
}

export async function getUsers() {
  const [row] = await pool.query("SELECT * FROM Users");
  return row;
}

export async function checkUser(UserName, GivenPassword) {
  let sql = "SELECT * FROM Users WHERE UserName = ?";
  let data = [UserName];
  const [row] = await pool.query(sql, data);
  if (row.length == 0) {
    return {
      status: 0,
      content: "User Does not exist",
    };
  }
  let checkPassword = await bcrypt.compare(GivenPassword, row[0].Password);
  if (checkPassword) {
    console.log("User Verified");
    const data = {
      user: {
        id: row[0].UserID,
      },
    };
    const authToken = jwt.sign(data, JWT_SECRET);
    return {
      status: 1,
      userID: row[0].UserID,
      content: "User Verified",
      authToken: authToken,
    };
  } else {
    console.log("Hacker! Back Up Soldier Fire in the Hole!!!! ");
    return {
      status: -1,
      content: "User Password are incorrect!",
    };
  }
}

export async function deleteUser(id) {
  const [row] = await pool.query("DELETE FROM Users WHERE UserID = ?", [id]);
  if (row.affectedRows) {
    return "User deletd Successfully";
  }
  return "User does not exist";
}

export async function updateUser(
  Name,
  UserName,
  Password,
  PhoneNo,
  Email,
  UserType,
  AddressLine1,
  AddressLine2,
  City,
  State,
  PostalCode,
  Country,
  id
) {
  let sql =
    "UPDATE Users SET Name = ?, UserName = ?, Password = ?, PhoneNo = ?, Email = ?, UserType = ?, AddressLine1 = ?, AddressLine2 = ?, City = ?, State = ?, PostalCode = ?, Country = ? WHERE UserID = ?";

  let data = [
    Name,
    UserName,
    Password,
    PhoneNo,
    Email,
    UserType,
    AddressLine1,
    AddressLine2,
    City,
    State,
    PostalCode,
    Country,
    id,
  ];

  const [row] = await pool.query(sql, data);
  if (row.affectedRows) {
    return "User Updated Successfully";
  }
  return "User does not exist";
}

// const result  = await createUser("adil","Adil","adil","234234","adil@adil","Customer","durg","bhilai","durg","bhilai","23423","Dubai");
// console.log(result);

// const result = await checkRatUser("Adil", "adil");
// console.log(result);
