Create a run.js file that
* Displays the path to the coucou.txt file
* Create a jtutu folder
* Copy the contents of the coucou.txt file into a file of the same name under the jtutu directory

---

## Tips

Nodejs modules expose many methods. Refer to the documentation on the node site.

[-> fs](https://nodejs.org/api/fs.html)  
[-> path](https://nodejs.org/api/path.html)

File system access can be synchronous or asynchronous.

```javascript
  // sync
  const contenuDuDossier = fs.readdirSync('/path/file');
```
```javascript
  // async
  fs.readdir('/path/file', (erreur, contenuDuDossier) => {
      // code
  });
```

Using asynchronous APIs can be confusing, nested callbacks can make the project complex, even cause the dreaded [callback hell](http://callbackhell.com/)

## test

launch test with

```
npm test -- 03_fs/test.spec.js
```
