import mysql from "mysql2";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = "anant";

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

export async function createDeliveryBoy(deliveryData) {
  let hashedPass = await bcrypt.hash(deliveryData.Password, 10);

  const [row] = await pool.query(
    "INSERT INTO DeliveryBoys (UserName,Name,Password,PhoneNo,GovIDType,GovID,BankName,AccountNo ) VALUES  (?, ?, ?, ?, ?, ?, ?, ?)",
    [
      deliveryData.UserName,
      deliveryData.Name,
      hashedPass,
      deliveryData.PhoneNo,
      deliveryData.GovIDType,
      deliveryData.GovID,
      deliveryData.BankName,
      deliveryData.AccountNo,
    ]
  );
  const result = await getDeliveryBoy(row.insertId);
  return result;
}

export async function getDeliveryBoy(DeliveryBoyID) {
  const [row] = await pool.query(
    "SELECT * FROM DeliveryBoys WHERE DeliveryBoyID = ?",
    [DeliveryBoyID]
  );
  return row;
}

export async function getDeliveryBoys() {
  const [row] = await pool.query("SELECT * FROM DeliveryBoys");
  return row;
}

// export async function checkDeliveryBoy(UserName, Password) {
//   const [row] = await pool.query(
//     "SELECT * FROM DeliveryBoys WHERE UserName = ? AND Password = ?",
//     [UserName, Password]
//   );
//   let length = Object.keys(row).length;
//   if (length) {
//     return true;
//   }
//   return false;
// }

export async function deleteDeliveryBoy(DeliveryBoyID) {
  const [row] = await pool.query(
    "DELETE FROM DeliveryBoys WHERE DeliveryBoyID = ?",
    [DeliveryBoyID]
  );
  if (row.affectedRows) {
    return "User deletd Successfully";
  }
  return "User does not exist";
}

export async function updateShopkeeper(
  Name,
  UserName,
  Password,
  PhoneNo,
  BankName,
  AccountNo,
  DeliveryBoyID
) {
  let sql =
    "UPDATE DeliveryBoys SET Name = ?, UserName = ?, Password = ?, PhoneNo = ?, BankName = ?, AccountNo = ?, WHERE DeliveryBoyID  = ?";

  let data = [
    Name,
    UserName,
    Password,
    PhoneNo,
    BankName,
    AccountNo,
    DeliveryBoyID,
  ];
  const [row] = await pool.query(sql, data);
  if (row.affectedRows) {
    return "Shopkeeper Updated Successfully";
  }
  return "Shopkeeper does not exist";
}

export async function checkDeliveryBoy(UserName, GivenPassword) {
  let sql = "SELECT * FROM DeliveryBoys WHERE UserName = ?";
  let data = [UserName];
  const [row] = await pool.query(sql, data);
  if (row.length == 0) {
    return {
      status: 0,
      content: "DeliveryBoy Does not exist",
    };
  }
  let checkPassword = await bcrypt.compare(GivenPassword, row[0].Password);
  if (checkPassword) {
    console.log("DeliveryBoy Verified");
    const data = {
      user: {
        id: row[0].DeliveryBoyID,
      },
    };
    const authToken = jwt.sign(data, JWT_SECRET);
    return {
      status: 1,
      content: "DeliveryBoy Verified",
      authToken: authToken,
    };
  } else {
    console.log("Hacker! Back Up Soldier Fire in the Hole!!!! ");
    return {
      status: -1,
      content: "DeliveryBoy Password are incorrect!",
    };
  }
}

// const result = await createDeliveryBoy(
//   "Shyam",
//   "Shyam",
//   "123",
//   "23432432",
//   "PAN",
//   "234234",
//   "UNION",
//   "23423423"
// )

// console.log(result);
