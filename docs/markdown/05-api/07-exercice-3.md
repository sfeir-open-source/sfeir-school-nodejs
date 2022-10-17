<!-- .slide: class="exercice" -->

# File system

## Lab

<br>
In exercices/03_fs

Create a run.js file that

- Displays the path to the cuckoo.txt file
- Create a jtutu folder
- Copy the contents of the cuckoo.txt file into a file of the same name under the jtutu directory

Expected result:

```bash
$ node run.js
/home/sfeir/nodejs/exercice3/coucou.txt
$ cat jtutu/coucou.txt
Hello, Sfeir!
```

##==##

<!-- .slide: class="exercice" -->

# File system : Solution

## Soluce

<br>

run.js

```javascript
const fs = require("fs");
const path = require("path");

const options = { encoding: "utf-8" };
const fromPath = path.resolve(__dirname, "coucou.txt");
const folder = path.resolve(__dirname, "jtutu");
const toPath = path.resolve(folder, "coucou.txt");

console.log(fromPath);

fs.mkdir(folder, function (err) {
  if (err) throw err;

  fs.readFile(fromPath, options, (err, data) => {
    if (err) throw err;

    fs.writeFile(toPath, data, options, (err) => {
      if (err) throw err;
    });
  });
});
```

##==##

<!-- .slide: class="exercice" -->

# File system : Solution

## Soluce

With async/await
<br>

run.js

```javascript
const { promises } = require("fs");
const path = require("path");
const { mkdir, readFile, writeFile } = promises;

const options = { encoding: "utf-8" };
const fromPath = path.resolve(__dirname, "coucou.txt");
const folder = path.resolve(__dirname, "jtutu");
const toPath = path.resolve(folder, "coucou.txt");

(async () => {
  await mkdir(folder);
  const data = await readFile(fromPath, options);
  await writeFile(toPath, data, options);
})();
```
