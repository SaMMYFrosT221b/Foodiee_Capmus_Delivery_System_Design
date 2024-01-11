import mysql from "mysql2";

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
  const [row] = await pool.query(
    "INSERT INTO Shopkeepers (Name,ShopUserName,Password,Email,PhoneNo,ShopName, ShopNo, BankName,AccountNo, GSTNo, GovIDType, GovID,AddressLine1,AddressLine2,City,State,PostalCode, Country) VALUES  (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
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

export async function checkShopkeeper(ShopUserName, Password){
    const [row] = await pool.query("SELECT * FROM Shopkeepers WHERE ShopUserName = ? AND Password = ?",[ShopUserName,Password]);

    let length = Object.keys(row).length;
    if (length) {
      return true;
    }
    return false;
}



export async function deleteShopkeeper(ShopkeeperID) {
  const [row] = await pool.query("DELETE FROM Shopkeepers WHERE ShopkeeperID = ?", [ShopkeeperID]);
  if(row.affectedRows){
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
    ShopkeeperID
  ];
  const [row] = await pool.query(sql, data);
  if(row.affectedRows){
    return "Shopkeeper Updated Successfully";
  }
  return "Shopkeeper does not exist";
}
