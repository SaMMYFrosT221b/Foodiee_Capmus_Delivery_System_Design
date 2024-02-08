import mysql from "mysql2";

const pool = mysql
  .createPool({
    host: "127.0.0.1",
    user: "root",
    password: "123",
    database: "foodiee",
  })
  .promise();

export async function addToCart(cartData) {
  let sql =
    "INSERT INTO Cart (UserID, itemID, ShopkeeperID, OrderStatus, itemName, itemQuantity, itemPrice ) VALUES (?, ?, ?, ?, ?, ?, ?)";
  let data = [
    cartData.UserID,
    cartData.itemID,
    cartData.ShopkeeperID,
    cartData.OrderStatus,
    cartData.itemName,
    cartData.itemQuantity,
    cartData.itemPrice,
  ];

  try {
    const updateResult = await updateItemQuantity(
      cartData.UserID,
      cartData.itemID,
      cartData.itemQuantity
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

async function updateItemQuantity(userID, itemID, newQuantity) {
  try {
    let [results] = await pool.query(
      "SELECT itemID FROM Cart WHERE UserID = ? AND itemID = ?",
      [userID, itemID]
    );

    if (results.length > 0) {
      await pool.query(
        "UPDATE Cart SET itemQuantity = ? WHERE UserID = ? AND itemID = ?",
        [newQuantity, userID, itemID]
      );

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
    if (result.affectedRows > 0) {
      return "Item deleted successfully!";
    } else {
      return "No matching item found for this user.";
    }
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
      console.log("Items for user:", results);
      return results;
    } else {
      console.log("No items found for this user.");
      return [];
    }
  } catch (error) {
    console.error(error);
    return error;
  }
}

// // const data = {
// //   UserID: 12,
// //   itemID: 10,
// //   ShopkeeperID: 2,
// //   OrderStatus: "Pending",
// //   itemName: "Pani Puri",
// //   itemQuantity: 10,
// //   itemPrice: 10.23,
// // };

// const result = await getItemsByUser(12);
// console.log(result);
