import mysql from "mysql2";
import bcrypt from 'bcryptjs';

const pool = mysql
  .createPool({
    host: "127.0.0.1",
    user: "root",
    password: "123",
    database: "foodiee",
  })
  .promise();

export async function createDeliveryBoy(
  UserName,
  Name,
  Password,
  PhoneNo,
  GovIDType,
  GovID,
  BankName,
  AccountNo
) {
  let hashedPass = await bcrypt.hash(Password, 10);

  const [row] = await pool.query(
    "INSERT INTO DeliveryBoys (UserName,Name,Password,PhoneNo,GovIDType,GovID,BankName,AccountNo ) VALUES  (?, ?, ?, ?, ?, ?, ?, ?)",
    [UserName, Name, hashedPass, PhoneNo, GovIDType, GovID, BankName, AccountNo]
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
    return {
      status: 1,
      content: "DeliveryBoy Verified",
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