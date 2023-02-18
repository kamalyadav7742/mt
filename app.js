const express=require("express")

const app=express();

const router= express.Router();

const Login=require("./login-schema.js")

const bodyParser=require('body-parser');

const con =require("./connection.js")



const { Schema } = require("mongoose");



app.set('view engine','ejs');


app.get('/',(req,res)=>{

    res.render('index');

});

app.get('/auto',(req,res)=>{

    res.render('auto');

})

// app.get('/dashboard',(req,res)=>{

//     res.render('admin/dashboard');

// })

// app.get('/form',(req,res)=>{

//     res.render('admin/form')
// })



router.post('/auto',(req,res)=>{

    var email =req.body.email;
    var password =req.body.password;
   
   con.connect((err)=>{

       if(err) throw err;
       var sql ="INSERT INTO interview(email,password) VALUES(?,?)";

       con.query(sql,[email,password], function (err, result){

           if(err) throw err;
           res.render('admin/dashboard')
       })
   })



})


// department



router.post('/dashboard',(req,res)=>{
    var name =req.body.name;
    var contact =req.body.contact;
    var file =req.body.file;
    var email =req.body.email;
    var department =req.body.department;
   
   con.connect((err)=>{

       if(err) throw err;
       var sql ="INSERT INTO department(name,contact,file,email,department) VALUES(?,?,?,?,?)";

       con.query(sql,[name,contact,file,email,department], function (err, result){

           if(err) throw err;
           res.render('admin/dashboard')
       })   })



})












//data get

// router.get('/login', function(req,res){

//     file.find(function(err,data){
 
//          if(err){
//              console.log(err);
//          }
//          else{
//              res.render('admin/dashboard',{data:data});
//              console.log(data);
//          }
//      });
//  });






app.get('/form',function(req,res){
    con.connect(function(err){
      if (err)
      console.log(err);
      var sql="select*from department";
      con.query(sql,function(err,data,result){
       if (err) {
        console.log(err);
  
       }
       else{
        console.log(result);
        res.render('form',{data:data});
       }
      });
    });
  });

 

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:true}));

app.use('/',router);
    app.listen(5000,()=>console.log('listeee on 5000'));




    