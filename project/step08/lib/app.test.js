const request = require("supertest");
const PouchDB = require("pouchdb");
PouchDB.plugin(require("pouchdb-find"));
PouchDB.plugin(require("pouchdb-adapter-memory"));

let db;

const appFunction = require("./app");

describe("Sfeir Schools app", () => {
  let app;

  beforeAll(async () => {
    const db = new PouchDB("test", { adapter: "memory" });
    app = appFunction(db);
  });

  afterAll(async () => {
    await db.destroy();
  });

  it("It should list Sfeir Schools", async done => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([]);

    done();
  });

  it("It should add a Sfeir School", async done => {
    const responsePost = await request(app)
      .post("/")
      .send({
        title: "Sfeir School tartiflette"
      });

    expect(responsePost.statusCode).toBe(201);

    const {
      body: [element]
    } = await request(app).get("/");

    expect(element.title).toBe("Sfeir School tartiflette");
    expect(element._id).toBeTruthy();

    done();
  });
});
