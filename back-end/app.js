let express =  require('express');
let bodyParser = require('body-parser');
let path = require('path');
let session = require('express-session');
let router = require('./routes/router');

let log4js = require('log4js');

log4js.configure({
  appenders: { cheese: { type: 'file', filename: 'cheese.log' } },
  categories: { default: { appenders: ['cheese'], level: 'error' } }
});
 
let logger = log4js.getLogger('cheese');

let port = process.env.PORT || 9999;
let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(session({
	secret: 'encryption-currency',
    cookie: {maxAge: 3600000},
    resave: true,
    saveUninitialized: true,
}));
app.use(router);

app.listen(port, () => {
	console.log(`devServer start on port:${port}`);
})