import mysql from "mysql2";

const pool = mysql
  .createPool({
    host: "127.0.0.1",
    user: "root",
    password: "123",
    database: "foodiee",
  })
  .promise();

export async function createUser(
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
  Country
) {
  const [row] = await pool.query(
    "INSERT INTO Users (Name, UserName,Password, PhoneNo, Email, UserType,AddressLine1,AddressLine2,City,State,PostalCode, Country) VALUES  (?, ?,  ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
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

export async function checkUser(UserName, Password) {
  const [row] = await pool.query(
    "SELECT * FROM Users WHERE UserName = ? AND Password = ?",
    [UserName, Password]
  );

  let length = Object.keys(row).length;
  if (length) {
    return true;
  }
  return false;
}
