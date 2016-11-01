#!/usr/bin/env node

const workshopper = require('workshopper-adventure');
const path = require('path');

const nodejs200 = workshopper({
  name: 'nodejs200',
  title: 'nodejs200',
  header: require('workshopper-adventure/default/header'),
  appDir: __dirname,
  languages: ['fr']
});
nodejs200.addAll([
  '01_hello',
  '02_module'
  // '03_fs',
  // '04_http'
]);

nodejs200.execute(process.argv.slice(2));
