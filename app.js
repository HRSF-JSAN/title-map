const express = require('express');
const path = require('path');
var faker = require('faker');
const app = express();


app.use(express.static(path.join(__dirname + "/client")))

var randomName = faker.name.findName();
console.log(randomName);


app.listen(3000, () => console.log('app listening on port 3000'))