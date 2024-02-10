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

export async function addToCart(cartData) {
  let sql =
    "INSERT INTO Cart (UserID, itemID, ShopkeeperID, itemName, itemQuantity, itemPrice ) VALUES (?, ?, ?, ?, ?, ?)";
  let data = [
    cartData.UserID,
    cartData.itemID,
    cartData.ShopkeeperID,
    cartData.itemName,
    cartData.itemQuantity,
    cartData.itemPrice,
    cartData.operator,
  ];

  try {
    const updateResult = await updateItemQuantity(
      cartData.UserID,
      cartData.itemID,
      cartData.itemQuantity,
      cartData.operator
    );
    if (updateResult.statusCode === 1) {
      return updateResult.desc;
    }
    const [row] = await pool.query(sql, data);
    return `Item added to the User ${cartData.UserID} with the ID ${row.insertId}`;
  } catch (error) {
    console.error(`An error occurred while adding to the cart: ${error}`);
    return [400, error];
  }
}

async function updateItemQuantity(userID, itemID, newQuantity, operator) {
  try {
    let [results] = await pool.query(
      "SELECT itemID FROM Cart WHERE UserID = ? AND itemID = ?",
      [userID, itemID]
    );

    if (results.length > 0) {
      if (operator === "+") {
        await pool.query(
          "UPDATE Cart SET itemQuantity = itemQuantity + ? WHERE UserID = ? AND itemID = ?",
          [newQuantity, userID, itemID]
        );
      } else if (operator === "-") {
        await pool.query(
          "UPDATE Cart SET itemQuantity = GREATEST(0, itemQuantity - ?) WHERE UserID = ? AND itemID = ?",
          [newQuantity, userID, itemID]
        );
      }

      return {
        statusCode: 1,
        desc: "Quantity updated successfully!",
      };
    } else {
      return {
        statusCode: 0,
        desc: "No matching item found for this user.",
      };
    }
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function deleteItem(userID, itemID) {
  try {
    let [result] = await pool.query(
      "DELETE FROM Cart WHERE UserID = ? AND itemID = ?",
      [userID, itemID]
    );
    return "Item deleted Successfully";
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function getItemsByUser(userID) {
  try {
    let [results] = await pool.query("SELECT * FROM Cart WHERE UserID = ?", [
      userID,
    ]);
    if (results.length > 0) {
      return results;
    } else {
      return [];
    }
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function removeUserItems(userID) {
  try {
    let [result] = await pool.query("DELETE FROM Cart WHERE UserID = ?", [
      userID,
    ]);
    return "Item deleted Successfully";
  } catch (error) {
    console.error(error);
    return error;
  }
}

// const data = {
//   UserID: 12,
//   itemID: 2,
//   ShopkeeperID: 2,
//   itemName: "Maggiee",
//   itemQuantity: 10,
//   itemPrice: 10.23,
// };

// const result = await deleteItem(12, 2);
// console.log(result);
