import mysql from "mysql2";

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
  const [row] = await pool.query(
    "INSERT INTO DeliveryBoys (UserName,Name,Password,PhoneNo,GovIDType,GovID,BankName,AccountNo ) VALUES  (?, ?, ?, ?, ?, ?, ?, ?)",
    [UserName, Name, Password, PhoneNo, GovIDType, GovID, BankName, AccountNo]
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

export async function checkDeliveryBoy(UserName, Password) {
  const [row] = await pool.query(
    "SELECT * FROM DeliveryBoys WHERE UserName = ? AND Password = ?",
    [UserName, Password]
  );
  let length = Object.keys(row).length;
  if (length) {
    return true;
  }
  return false;
}



export async function deleteDeliveryBoy(DeliveryBoyID) {
  const [row] = await pool.query("DELETE FROM DeliveryBoys WHERE DeliveryBoyID = ?", [DeliveryBoyID]);
  if(row.affectedRows){
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
    DeliveryBoyID
  ];
  const [row] = await pool.query(sql, data);
  if(row.affectedRows){
    return "Shopkeeper Updated Successfully";
  }
  return "Shopkeeper does not exist";
}
