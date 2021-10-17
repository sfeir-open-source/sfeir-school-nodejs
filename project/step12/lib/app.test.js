const request = require("supertest");
const PouchDB = require("pouchdb");
PouchDB.plugin(require("pouchdb-find"));
PouchDB.plugin(require("pouchdb-adapter-memory"));

const appFunction = require("./app");

describe("Sfeir Schools app", () => {
  let app;
  let db;
  let session;

  const fakeCredentials = {
    username: "test",
    password: "test"
  }

  beforeAll(async () => {
    db = new PouchDB("test", { adapter: "memory" });
    app = appFunction(db);

    await request(app)
    .post("/users/register")
    .send(fakeCredentials)
    await request(app).post('/users/login')
      .send(fakeCredentials)
      .then(function (res) {
        const cookie = res
        .headers['set-cookie'][0]
        .split(',')
        .map(item => item.split(';')[0])
        session = cookie
        return session
      });
  });

  afterAll(async () => {
    await db.destroy();
  });

  it("It should list Sfeir Schools", async () => {
    const response = await request(app)
    .get("/schools");

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([]);

  });

  it("It should add a Sfeir School", async () => {
    const responsePost = await request(app)
      .post("/schools")
      .set('Cookie', session)
      .send({
        title: "Sfeir School tartiflette"
      });

    expect(responsePost.statusCode).toBe(201);

    const {
      body: [element]
    } = await request(app).get("/schools");

    expect(element.title).toBe("Sfeir School tartiflette");
    expect(element._id).toBeTruthy();

  });
});
