# Sfeir Schools

## Step 2

A Sfeir School is an object, for example:

```json
{
  "title": "Sfeir School NodeJS",
  "trainer": "Siegfried Ehret",
  "attendees": 42
}
```

- We will manage the Sfeir Schools in memory with a table.
- Modify the `GET` route to return all Sfeir Schools.
- Create a route corresponding to the `POST` method to add a Sfeir School (install the [body-parser](https://github.com/expressjs/body-parser) module).
- Launch with `npm start`.
-  Test with [httpie](https://httpie.org/):
  - To retrieve the list:  `http http://localhost:3000/`.
  - To add a Sfeir School:  `http POST http://localhost:3000/ title="Sfeir School NodeJS" trainer="Siegfried Ehret"`.

Notes: since express v4.16.0, body-parser is deprecated and replaced by express
