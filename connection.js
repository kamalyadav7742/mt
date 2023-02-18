var sql=require('mysql2');

const con=sql.createConnection({
    host:"localhost",
    user:'root',
    // password:'Kamal7742kn@',
    password:'',
    database:'dobber'
});

con.connect(function(err){
    if (err) throw err;
    console.log("connect");

})


con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM interview WHERE email = 'kamalmehta7742@gmail.com'", function (err, result) {
          if (err) throw err;
          console.log(result);
        });
      });
    



module.exports=con;