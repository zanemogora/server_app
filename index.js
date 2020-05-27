var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();

const sqlite3 = require('sqlite3').verbose();
const DB_PATH = './NodejsSQL/sqlite.db';



var bodyParser = require('body-parser');
















//starting database
const DB = new sqlite3.Database(DB_PATH, function(err){
    if (err) {
        console.log(err)
        return
    }
    console.log('Connected to ' + DB_PATH + ' database.')

    //enable foreign key
    DB.exec('PRAGMA foreign_keys = ON;', function(error)  {
        if (error){
            console.error("Pragma statement didn't work.")
        } else {
            console.log("Foreign Key Enforcement is on.")
        }
    });
});


dbSchema = `CREATE TABLE IF NOT EXISTS Pouzivatelia (
        id integer NOT NULL PRIMARY KEY,
        name text NOT NULL,
        age integer NOT NULL,
        sex text NOT NULL,
        test text NOT NULL,
        score integer NOT NULL
    );`

DB.exec(dbSchema, function(err){
    if (err) {
        console.log(err);
    }
});

//ulozenie udajov o uzivatelovi do databazy
function registerUser(name, age, sex, test, score) {
    var sql= "INSERT INTO Pouzivatelia (name, age, sex, test, score) "
    sql += "VALUES (?, ?, ?, ?, ?) "

    DB.run(sql, [name, age, sex, test, score], function(error) {
        if (error) {
            console.log(error)
        } else {
            console.log("Last ID: " + this.lastID)
            console.log("# of Row Changes: " + this.changes)
        }
    });
};

//DB.close();
/*
app.get('/', function(req, res){
  res.sendFile('views/index.html');

  //res.redirect('/views/index.html');
  //res.sendFile('C:/Users/Lukáš Hudák/Desktop/serverova appka 24.5.2020/nodekb/views/index.html');
});


app.use(express.static('/views'));
*/
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/views'));
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());



app.get('/', function(req, res){
    res.render('index.html');
});








app.post('/', function (req, res){

  registerUser(req.body.meno, req.body.vek, req.body.pohlavie, req.body.testy, req.body.skore);

  var sql='SELECT * FROM Pouzivatelia';
  DB.all(sql, function (err, data, fields) {
  if (err) throw err;
  res.render('user-list.ejs', { title: 'User List', userData: data});
  });
  module.exports = app;

});



app.listen(3000);
