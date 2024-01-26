import mysql from "mysql2";

const pool = mysql
  .createPool({
    host: "127.0.0.1",
    user: "root",
    password: "123",
    database: "foodiee",
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
    const [row] = await pool.query(sql, data);
    // const result = await showItem(row.insertId);
    return `Item added successfully with ID ${row.insertId}`;
    // return row;
  } catch (error) {
    console.error(`An error occurred while adding the item: ${error}`);
    throw error;
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
    return row[0];
  } catch (error) {
    console.error(`An error occurred while adding the item: ${error}`);
    throw error;
  }
}

const result = await addItem(
  5,
  "Burger",
  "Made up of best gurger ",
  40,
  "",
  "12min",
  "Indian"
);
// const result  = await showItems();
console.log(result);
