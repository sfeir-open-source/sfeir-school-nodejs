# Sfeir Schools

## Step 3

Tests !

We will use 2 modules that we will install under the `devDependencies`:

- [jest](https://facebook.github.io/jest/), a test framework
- [supertest](https://github.com/visionmedia/supertest), to simply test requests to an API.


And a bit of refactoring:

- Make a "lib/app.js" module with the whole application except the `app.listen(...)`.
- Make an "index.js" which will call our module and do the `app.listen(...)`.
- Change scripts in package.json.

And finally:

- Create a test that will do a `GET` on `/` and verify that the `statusCode` is `200` and that the `body` is `[]`.
- Modify the "test" npm script to assign the "jest" command to it.
- Run the tests with `npm test`.
