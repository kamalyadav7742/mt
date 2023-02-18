// const { connection } = require('mongoose');

var mysql=require('mysql');

const express=require("express")

const app=express();

const router= express.Router();


const Login=require("./login-schema.js")

const bodyParser=require('body-parser');

var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Kamal7742kn@',
    // password:'',

    // database:'dobber'
    database:'dobber'

});

app.set('view engine','ejs');


// php connection

connection.connect(function(err){

  if(err){
    return console.log('error'+err.message)
  }

  console.log('connected too my save server')


});

// create data base

// connection.query("CREATE DATABASE dobber", function (err, result) {
//        if (err) throw err
//     console.log("Database created");

//    })


        //create table

// var sql = "CREATE TABLE hack (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50), modal VARCHAR(50), brand VARCHAR(50), price VARCHAR(50), discount VARCHAR(50))";
//  connection.query(sql, function (err, result) {
//    if (err) throw err; console.log("Table created"); });



//DatA inserted

// var sql = "INSERT INTO golu (address) VALUES ?";
// var values = [
//   [ 'Highway 71'],
//   [ 'Lowstreet 4'],
//   ['Apple st 652'],
//   [ 'Mountain 21'],
//   [ 'Valley 345'],
//   [ 'Ocean blvd 2'],
//   ['Green Grass 1'],
//   [ 'Sky st 331'],
//   [ 'One way 98'],
//   [ 'Yellow Garden 2'],
//   ['Park Lane 38'],
//   ['Central st 954'],
//   ['Main Road 989'],
//   ['Sideway 1633']
// ];
// connection.query(sql, [values], function (err, result) {
//   if (err) throw err;
//   console.log("Number of records inserted: " + result.affectedRows);
// });



//get data

// connection.query('select*from golu',(function(err,result,fields){

//    if(err) throw err;
//    console.log('all result here',result);

// }))






























// app.get('/',(req,res)=>{

//   res.render('index');

// });

// app.get('/auto',(req,res)=>{

//   res.render('auto');

// })


// router.post('/login',(req,res)=>{

//   var loginform={
//       name:req.body.name,
//       modal:req.body.name1,
//       brand:req.body.name2,
//       price:req.body.name3,
//       discount:req.body.name4,
//   };

//   var loginpost= new Login(loginform);
//   loginpost.save(function(err){

//       if(err){
//           console.log("error to save data");
//       }
//       else{
//           console.log("data saved successfully",loginpost);
//       }
//   });

//   res.send("done");


// })









