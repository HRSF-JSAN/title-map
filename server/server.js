const http = require('http');
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const path = require('path');
const db = require('../db/dbQuery.js');
const redis = require('redis'); /*eslint-disable-line*/
const client = redis.createClient(6379);

http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFileAsync(path.join(__dirname, '../client/dist/index.html'), 'utf-8')
      .then((data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      })
      .catch(() => {
        res.writeHead(500);
        res.end();
      });
  } else if (req.url.match('.js')) {
    const stream = fs.createReadStream(path.join(__dirname, '../client/dist/bundle.js'), 'utf-8');
    res.writeHead(200, { 'Content-Type': 'text/javascript' });
    stream.pipe(res);
  } else if (req.url.match('.css')) {
    const stream = fs.readFileAsync(path.join(__dirname, '../client/src/styles.css'), 'utf-8');
    res.writeHead(200, { 'Content-Type': 'text/css' });
    stream.pipe(res);
  } else if (req.url.match('/title')) {
    let input = req.url.match('/title').input; /*eslint-disable-line*/
    input = input.slice(7);
    const query = 'select * from restaurant where id = $1';
    client.get(input, (err, value) => {
      if (err) {
        console.log(err); /*eslint-disable-line*/
      }
      if (value) {
        const data = JSON.parse(value);
        res.end(JSON.stringify(data));
      } else {
        db.queryDB(query, input)
          .then((data) => {
            client.set(input, JSON.stringify(data), (err, data) => { /*eslint-disable-line*/
              if (err) {
                console.log(err); /*eslint-disable-line*/
              }
            });
            res.end(JSON.stringify(data));
          });
      }
    });
  } else if (req.url.match('/address')) {
    let input = req.url.match('/address').input; /*eslint-disable-line*/
    const redisAdd = input.slice(1);
    input = input.slice(9);
    const query = 'select * from address where id_restaurant = $1';
    client.get(redisAdd, (err, value) => {
      if (err) {
        console.log(err); /*eslint-disable-line*/
      }
      if (value) {
        const data = JSON.parse(value);
        res.end(JSON.stringify(data));
      } else {
        db.queryDB(query, input)
          .then((data) => {
            client.set(redisAdd, JSON.stringify(data), (error, dataAddress) => { /*eslint-disable-line*/
              if (err) {
                console.log(err); /*eslint-disable-line*/
              }
            });
            res.end(JSON.stringify(data));
          });
      }
    });
  } else if (req.url.match('.jpg')) {
    const stream = fs.createReadStream(path.join(__dirname, '../client/dist/ca5f7af07bcf83d9dd2487687a1d5bda.jpg'));
    res.writeHead(200, { 'Content-Type': 'image/jpeg' });
    stream.pipe(res);
  }
}).listen(3500);
