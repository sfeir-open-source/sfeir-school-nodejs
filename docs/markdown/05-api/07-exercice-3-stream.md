<!-- .slide: class="exercice" -->

# file system (using streams)

## Lab

<b>exercices/06_fs_stream</b>

Create a run.js file that

- Displays the path to the cuckoo.txt file
- Create a jtutu folder
- Copy the contents of the cuckoo.txt file into a file of the same name under the jtutu directory

expected result:

```bash
$ node run.js
/home/sfeir/nodejs/exercice3/coucou.txt
$ cat jtutu/coucou.txt
Hello, Sfeir!
```

##==##

<!-- .slide: class="exercice" -->

# file system (using streams) : Solution

## Lab

<b>exercices/06_fs_stream-solution/run.js</b>

```javascript
const fs = require("fs");
fs.mkdir("jtutu", function (err) {
  if (err) throw err;
  fs.createReadStream("./coucou.txt").pipe(
    fs.createWriteStream("./jtutu/coucou.txt")
  );
});
```
