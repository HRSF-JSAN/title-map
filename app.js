const express = require('express');
const path = require('path');
const faker = require('faker');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname + "/client/dist")))

var randomName = faker.name.findName();
console.log(randomName);
let types = ["Pizza", "Italian", "American", "Chinese", "Italian", "Mexican", "Indian", "French", "Brunch"];
let dollarsigns = [].fill('$', 0, Math.floor(Math.random() * 6)).join('');
let numStars = Math.floor(Math.random() * 5);

let titleShape = {
  title: faker.companyName,
  type: types[Math.floor(Math.random() * 10)],
  price: dollarsigns,
  numStars: numStars
}

let mapShape = {
  address: faker.fake("{{address.streetAddress}} {{address.city}} {{address.state}}, {{address.zipCode}}"),
  image: faker.image.imageUrl(),
  phoneNumber: faker.phone.phoneNumberFormat()
}

app.get('/title', (req, res) => {
  
  res.send(result);
})

app.get('/map', (req, res) => {

})


app.listen(3000, () => console.log('app listening on port 3000'))