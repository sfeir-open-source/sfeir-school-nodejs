const { promises } = require('fs');
const path = require('path');
const { mkdir, readFile, writeFile } = promises

const options = { encoding: 'utf-8' };
const fromPath = path.resolve(__dirname, 'coucou.txt');
const folder = path.resolve(__dirname, 'jtutu');
const toPath = path.resolve(folder, 'coucou.txt');

(async () => {
  await mkdir(folder);
  const data = await readFile(fromPath, options);
  await writeFile(toPath, data, options);
})();