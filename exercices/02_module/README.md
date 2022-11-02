1. Create a hello.js file that exports a function with a name argument
2. Create a run.js file that imports the hello.js module and calls the function passing 'Sfeir' as an argument.

Expected result:

```bash
$ node run.js
Hello, Sfeir!
```

---

## Tips

Create a new module by simply creating a new file that would contain your function.
To import a file located in the same directory, you can use:

```js
  // program.js
  const monImport = require('./importFile.js');
```

In order for the file to be exportable, it must contain:

```js
  // importFile.js
  module.exports = function() {
    // code to export
  };
```

## test

launch test with

```
npm test -- 02_module/test.spec.js
```
