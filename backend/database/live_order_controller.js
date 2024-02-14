import mysql from "mysql2";

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

// Adding a new order in LiveOrder
export async function addLiveOrder(liveOrder) {
    let sql =
      "INSERT INTO LiveOrders (ItemID, UserID, ShopkeeperID, OrderStatus, TotalQuantity, TotalAmount) VALUES (?, ?, ?, ?, ?, ?)";
    const data = [
      liveOrderDetails.itemID,
      liveOrderDetails.UserID,
      liveOrderDetails.ShopkeeperID,
      "Pending",
      liveOrderDetails.itemQuantity,
      liveOrderDetails.itemPrice * liveOrderDetails.itemQuantity,
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
        "INSERT INTO LiveOrders (ItemID,UserID,ShopkeeperID,OrderStatus,TotalQuantity,TotalAmount) VALUES  (?,?,?,?,?,?)";
      const data = [
        liveOrderDetails.itemID,
        liveOrderDetails.UserID,
        liveOrderDetails.ShopkeeperID,
        liveOrderDetails.OrderStatus,
        liveOrderDetails.itemQuantity,
        liveOrderDetails.itemPrice * liveOrderDetails.itemQuantity,
      ];
      const [row] = await pool.query(sql, data);
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

export async function getUniqueUsers(shopkeeperID) {
  try {
    const [row] = await pool.query(
      "SELECT DISTINCT UserID FROM LiveOrders WHERE ShopkeeperID = ? ORDER BY UserID ASC",
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

export async function showLiverOrdersReadyToDeliver() {
  try {
    const result = await pool.query(
      "SELECT Items.ItemName,Shopkeepers.ShopName,Users.UserName,LiveOrders.* FROM LiveOrders,Items,Shopkeepers,Users WHERE LiveOrders.UserID=Users.UserID and LiveOrders.ShopKeeperID=Shopkeepers.ShopKeeperID and Items.ItemID=LiveOrders.ITemID and LiveOrders.OrderStatus = ?",
      ['OrderReadyToDeliver']
    );
    const userDistinct = await pool.query(
      "SELECT DISTINCT UserID FROM LiveOrders WHERE OrderStatus = ?",
      ['OrderReadyToDeliver']
    );
    console.log(userDistinct[0])
    if(result){
      return [{"items": result[0], "distinctUser": userDistinct[0]}];
   
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
    return error;
  }
}
