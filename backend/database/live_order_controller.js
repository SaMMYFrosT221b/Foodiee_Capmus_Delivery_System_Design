import mysql from "mysql2";

const pool = mysql
  .createPool({
    host: "127.0.0.1",
    user: "root",
    password: "123",
    database: "foodiee",
  })
  .promise();

// Adding a new order in LiveOrder
export async function addLiveOrder(liveOrder) {
  let sql =
    "INSERT INTO LiveOrders (ItemID, UserID, ShopkeeperID, OrderStatus, TotalQuantity, TotalAmount) VALUES (?, ?, ?, ?, ?, ?)";
  let data = [
    liveOrder.ItemID,
    liveOrder.UserID,
    liveOrder.ShopkeeperID,
    liveOrder.OrderStatus,
    liveOrder.TotalQuantity,
    liveOrder.TotalAmount,
  ];

  try {
    const [row] = await pool.query(sql, data);
    // const result = await showItem(row.insertId);
    return `Congrats! Your Order is successfull! -random-number`;
    // return row;
  } catch (error) {
    console.error(`An error occurred while adding the item: ${error}`);
    throw error;
  }
}
export async function addLiveOrders(liveOrderDetails) {
  try {
    const sql =
      "INSERT INTO LiveOrders (ItemID, UserID, ShopkeeperID, OrderStatus, TotalQuantity, TotalAmount) VALUES (?, ?, ?, ?, ?, ?)";
    const data = [
      liveOrderDetails.itemID,
      liveOrderDetails.UserID,
      liveOrderDetails.ShopkeeperID,
      liveOrderDetails.OrderStatus,
      liveOrderDetails.itemQuantity,
      liveOrderDetails.itemPrice * liveOrderDetails.itemQuantity,
    ];
    const [row] = await pool.query(sql, data);
    console.log("Live order added Successfully");
    return row;
  } catch (err) {
    return err;
  }
}

export async function showLiveOrder(shopkeeperID) {
  try {
    const [row] = await pool.query(
      "SELECT * FROM LiveOrders WHERE ShopkeeperID = ?",
      [shopkeeperID]
    );
    // console.log(row);
    return row;
  } catch (error) {
    console.error(`An error occurred while fetching the item: ${error}`);
    // throw error;
    return "Error Found";
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
