import request from "supertest";
import app from "./app.js";

// describe("GET /", () => {
//   describe("Checking of the static routes", () => {
//     test("should respond with a 200 status code", async () => {
//       const response = await request(app).get("/");
//       expect(response.statusCode).toBe(200);
//     });
//     test("should respond with a 200 status code", async () => {
//       const response = await request(app).get("/");
//       expect(response.statusCode).toBe(200);
//     });
//     // test("should specify json in the content type header", async () => {
//     //   const response = await request(app).post("/users").send({
//     //     username: "username",
//     //     password: "password",
//     //   });
// expect(response.headers["content-type"]).toEqual(
//   expect.stringContaining("json")
// );
//     // });
//     // test("response has userId", async () => {
//     //   const response = await request(app).post("/users").send({
//     //     username: "username",
//     //     password: "password",
//     //   });
//     //   expect(response.body.userId).toBeDefined();
//     // });
//   });

//   // describe("GET / for the user", () => {
//   //   test("should respond with a status code of 200", async () => {
//   //     const response = await request(app).post("/users/").send(body);
//   //     expect(response.statusCode).toBe(200);
//   //   });
//   //   test("should be JSON format", async () => {});
//   // });
// });

// describe("GET /cart", () => {
//   describe("Checking the cart reoutes....", () => {
//     test("Should respond to be 200", async () => {
//       const response = await request(app).get("/cart");
//       expect(response.statusCode).toBe(200);
//     });
//   });
// });

describe("Cart Routes", () => {
  test("should get the cart routes", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
  });

  test("should add to cart", async () => {
    const res = await request(app).post("/cart/add-to-cart").send({
      UserID: "12",
      itemID: "1",
      ShopkeeperID: "2",
      itemName: "Burger",
      itemQuantity: "1",
      itemPrice: "120",
      operator: "+",
    });
    expect(res.statusCode).toEqual(200);
  });

  test("should get item by user", async () => {
    const res = await request(app).post("/cart/get-item-by-user").send({
      UserID: "12", // replace with your test data
    });
    expect(res.statusCode).toEqual(200);
  });

  test("should delete item from cart", async () => {
    const res = await request(app).post("/cart/delete-item-from-cart").send({
      UserID: "12", // replace with your test data
      itemID: "1", // replace with your test data
    });
    expect(res.statusCode).toEqual(200);
  });

  test("should delete user items", async () => {
    const res = await request(app).post("/cart/delete-user-items").send({
      UserID: "12", // replace with your test data
    });
    expect(res.statusCode).toEqual(200);
  });
});
