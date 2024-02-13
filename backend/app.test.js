import request from "supertest";
import app from "./app.js";

describe("GET /", () => {
  describe("Checking of the static routes", () => {
    // test("should respond with a 200 status code", async () => {
    //   const response = await request(app).get("/signup");
    //   expect(response.statusCode).toBe(200);
    // });
    test("should respond with a 200 status code", async () => {
      const response = await request(app).get("/");
      expect(response.statusCode).toBe(200);
    });
    // test("should specify json in the content type header", async () => {
    //   const response = await request(app).post("/users").send({
    //     username: "username",
    //     password: "password",
    //   });
    //   expect(response.headers["content-type"]).toEqual(
    //     expect.stringContaining("json")
    //   );
    // });
    // test("response has userId", async () => {
    //   const response = await request(app).post("/users").send({
    //     username: "username",
    //     password: "password",
    //   });
    //   expect(response.body.userId).toBeDefined();
    // });
  });

  // describe("GET / for the user", () => {
  //   test("should respond with a status code of 200", async () => {
  //     const response = await request(app).post("/users/").send(body);
  //     expect(response.statusCode).toBe(200);
  //   });
  //   test("should be JSON format", async () => {});
  // });
});
