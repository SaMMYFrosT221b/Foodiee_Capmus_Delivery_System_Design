import mysql from "mysql2";

const pool = mysql
  .createPool({
    host: "127.0.0.1",
    user: "root",
    password: "123",
    database: "foodiee",
  })
  .promise();

export async function createOrder(orderDetails) {
  let sql =
    "INSERT INTO Orders (ItemID, UserID , ShopkeeperID,TotalAmount , TotalQuantity, OrderStatus) VALUES (?, ?, ?, ?, ?, ?)";
  let data = [
    orderDetails.ItemID,
    orderDetails.UserID,
    orderDetails.ShopkeeperID,
    orderDetails.TotalAmount,
    orderDetails.TotalQuantity,
    orderDetails.OrderStatus,
  ];
}

export async function showOrder(shopkeeperID) {
  let sql = "SELECT * FROM Orders WHERE ShopkeeperID = ?";
  let data = [shopkeeperID];
  const [row] = await pool.query(sql, data);
  return row;
}
