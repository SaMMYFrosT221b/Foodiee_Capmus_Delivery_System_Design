import { response } from "express";
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

export async function addItem(itemData) {
  let sql =
    "INSERT INTO Items (ShopkeeperID, ItemName, Description, Price, ImageURL, ExpectedTime, CousineType) VALUES (?, ?, ?, ?, ?, ?, ?)";
  let data = [
    itemData.ShopkeeperID,
    itemData.ItemName,
    itemData.Description,
    itemData.Price,
    itemData.ImageURL,
    itemData.ExpectedTime,
    itemData.CousineType,
  ];

  try {
    const [checkIfAlready] = await pool.query(
      "SELECT * FROM Items WHERE ItemName = ?",
      [itemData.ItemName]
    );
    // If there is at least one row, the item already exists
    if (checkIfAlready.length > 0) {
      return [403, "Item already exists"];
    }
    const [row] = await pool.query(sql, data);
    // const result = await showItem(row.insertId);
    return [200, `Item added successfully with ID ${row.insertId}`];
    // return row;
  } catch (error) {
    console.error(`An error occurred while adding the item: ${error}`);
    return [400, error];
  }
}

export async function showItem(ItemID) {
  try {
    const [row] = await pool.query("SELECT * FROM Items WHERE ItemID = ?", [
      ItemID,
    ]);
    return row[0];
  } catch (error) {
    console.error(`An error occurred while adding the item: ${error}`);
    throw error;
  }
}

export async function showItems() {
  try {
    const [row] = await pool.query("SELECT * FROM Items");
    return row;
  } catch (error) {
    console.error(`An error occurred while adding the item: ${error}`);
    throw error;
  }
}

export async function showShopkeeperItems(shopkeeperID) {
  try {
    const [row] = await pool.query(
      "SELECT * FROM Items WHERE ShopkeeperID = ?",
      [shopkeeperID]
    );
    return row;
  } catch (error) {
    console.error(`An error occurred while adding the item: ${error}`);
    throw error;
  }
}

// const result = await addItem(
//   5,
//   "Burger",
//   "Made up of best gurger ",
//   40,
//   "",
//   "12min",
//   "Indian"
// );
// // const result  = await showItems();
// console.log(result);
