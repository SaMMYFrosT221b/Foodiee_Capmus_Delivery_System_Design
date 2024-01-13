import mysql from "mysql2";
import bcrypt from "bcryptjs";

const pool = mysql
  .createPool({
    host: "127.0.0.1",
    user: "root",
    password: "123",
    database: "foodiee",
  })
  .promise();

export async function createShopkeeper(
  Name,
  ShopUserName,
  Password,
  Email,
  PhoneNo,
  ShopName,
  ShopNo,
  BankName,
  AccountNo,
  GSTNo,
  GovIDType,
  GovID,
  AddressLine1,
  AddressLine2,
  City,
  State,
  PostalCode,
  Country
) {
  let hashedPass = await bcrypt.hash(Password, 10);

  const [row] = await pool.query(
    "INSERT INTO Shopkeepers (Name,ShopUserName,Password,Email,PhoneNo,ShopName, ShopNo, BankName,AccountNo, GSTNo, GovIDType, GovID,AddressLine1,AddressLine2,City,State,PostalCode, Country) VALUES  (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      Name,
      ShopUserName,
      hashedPass,
      Email,
      PhoneNo,
      ShopName,
      ShopNo,
      BankName,
      AccountNo,
      GSTNo,
      GovIDType,
      GovID,
      AddressLine1,
      AddressLine2,
      City,
      State,
      PostalCode,
      Country,
    ]
  );
  const result = await getShopkeeper(row.insertId);
  return result;
}

export async function getShopkeeper(id) {
  const [row] = await pool.query(
    "SELECT * FROM Shopkeepers WHERE ShopkeeperID = ?",
    [id]
  );
  return row;
}

export async function getShopkeepers() {
  const [row] = await pool.query("SELECT * FROM Shopkeepers");
  return row;
}

// export async function checkShopkeeper(ShopUserName, Password){
//     const [row] = await pool.query("SELECT * FROM Shopkeepers WHERE ShopUserName = ? AND Password = ?",[ShopUserName,Password]);

//     let length = Object.keys(row).length;
//     if (length) {
//       return true;
//     }
//     return false;
// }

export async function deleteShopkeeper(ShopkeeperID) {
  const [row] = await pool.query(
    "DELETE FROM Shopkeepers WHERE ShopkeeperID = ?",
    [ShopkeeperID]
  );
  if (row.affectedRows) {
    return "User deletd Successfully";
  }
  return "User does not exist";
}

export async function updateShopkeeper(
  Name,
  ShopUserName,
  Password,
  Email,
  PhoneNo,
  ShopName,
  ShopNo,
  BankName,
  AccountNo,
  AddressLine1,
  AddressLine2,
  City,
  State,
  PostalCode,
  Country,
  ShopkeeperID
) {
  let sql =
    "UPDATE Shopkeepers SET Name = ?, ShopUserName = ?, Password = ?,  Email = ?, PhoneNo = ?, ShopName = ?, ShopNo = ?, BankName = ?, AccountNo = ?, AddressLine1 = ?, AddressLine2 = ?, City = ?, State = ?, PostalCode = ?, Country = ? WHERE ShopkeeperID  = ?";

  let data = [
    Name,
    ShopUserName,
    Password,
    Email,
    PhoneNo,
    ShopName,
    ShopNo,
    BankName,
    AccountNo,
    AddressLine1,
    AddressLine2,
    City,
    State,
    PostalCode,
    Country,
    ShopkeeperID,
  ];
  const [row] = await pool.query(sql, data);
  if (row.affectedRows) {
    return "Shopkeeper Updated Successfully";
  }
  return "Shopkeeper does not exist";
}

export async function checkShopkeeper(ShopUserName, GivenPassword) {
  let sql = "SELECT * FROM Shopkeepers WHERE ShopUserName = ?";
  let data = [ShopUserName];
  const [row] = await pool.query(sql, data);
  if (row.length == 0) {
    return {
      status: 0,
      content: "Shopkeeper Does not exist",
    };
  }
  let checkPassword = await bcrypt.compare(GivenPassword, row[0].Password);
  if (checkPassword) {
    console.log("Shopkeeper Verified");
    return {
      status: 1,
      content: "Shopkeeper Verified",
    };
  } else {
    console.log("Hacker! Back Up Soldier Fire in the Hole!!!! ");
    return {
      status: -1,
      content: "Shopkeeper Password are incorrect!",
    };
  }
}

// const result = await createShopkeeper(
//   "Anant",
//   "Anant",
//   "123",
//   "anant@gmail.com",
//   "213234",
//   "At mart",
//   "2342",
//   "SBI",
//   "234234",
//   "23423423",
//   "PAN",
//   "234234",
//   "durg",
//   "kanhar",
//   "durg",
//   "Chattisgarh",
//   "23423",
//   "India"
// );

// console.log(result);
