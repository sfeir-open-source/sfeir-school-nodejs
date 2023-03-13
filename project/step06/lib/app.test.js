const request = require("supertest");
// TODO : import pouchdb-adapter-memory

const app = require("./app");

describe("Sfeir Schools app", () => {

  // TODO : use beforeAll method to instance in-memory database instance
  
  it("It should list Sfeir Schools", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([]);

  });

  it("It should add a Sfeir School", async () => {
    const responsePost = await request(app)
      .post("/")
      .send({
        title: "Sfeir School NodeJS"
      });

    expect(responsePost.statusCode).toBe(201);

    const responseGet = await request(app).get("/");

    // TODO : adapt this test to match the new response
    expect(responseGet.body).toEqual([
      {
        title: "Sfeir School NodeJS"
      }
    ]);
  });
});
