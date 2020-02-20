const express = require('express');
// TODO : import body-parser
const app = express();

// TODO : use body-parser middleware

// TODO : GET on / should return an array of schools
app.get('/', (req, res) => res.send('Hello, Sfeir School!'));

// TODO : Add a POST method and store the body in an array of schools

app.listen(3000, () => console.log('App listening on port 3000!'));