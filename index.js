var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();

const sqlite3 = require('sqlite3').verbose();
const DB_PATH = './NodejsSQL/sqlite.db';


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

app.get('/', function(req, res){

  res.sendFile('C:/Users/Lukáš Hudák/Desktop/serverova appka 24.5.2020/nodekb/views/index.html');
});


// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static('views'));


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
