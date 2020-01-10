const http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require('./routes');
var models = require('./models');

const hostname = "127.0.0.1";
const port = 4040;

// const server = http.createServer(/*(req,res)=>{
//   res.statusCode = 200;
//   res.setHeader('Content-Type','text/plain');
//   res.end(`Sending you something since you hit me on port ${port}.`);
// }*/);

app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());

app.listen(port,hostname,() => {
  console.log(`Server running on port : ${ port }`);
});

routes(app);

module.exports = app;
