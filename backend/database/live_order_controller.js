import mysql from "mysql2";

const pool = mysql
  .createPool({
    host: "127.0.0.1",
    user: "root",
    password: "123",
    database: "foodiee",
  })
  .promise();

export async function showLiveOrder(shopkeeperID) {
  try {
    const [row] = await pool.query(
      "SELECT * FROM LiveOrders WHERE ShopkeeperID = ?",
      [shopkeeperID]
    );
    return row[0];
  } catch (error) {
    console.error(`An error occurred while adding the item: ${error}`);
    throw error;
  }
}

export async function deleteLiveOrder(shopkeeperID, ItemID, UserID) {
  try {
    cosnt[row] = await pool.query(
      "DELETE FROM LiveOrders WHERE ShopkeeperID = ? AND ItemID = ? AND UserID = ?",
      [shopkeeperID, ItemID, UserID]
    );
    if (row.affectedRows) {
      return "Live Order Deleted";
    } else {
      return "Live Order Does not exist";
    }
  } catch (error) {
    console.log(error);
    return error;
  }
}
