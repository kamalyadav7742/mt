const express = require('express'); // Express
const router = express.Router(); // ROUTE Router
const cookieParser = require('cookie-parser')
const session = require('express-session'); // S Session
const connection = require('../db/connection'); // SQL connection

// COOKIE PARSER  ==>
router.use(cookieParser());
// SESSION  ======================================
const sess_time = 1000 * 60 * 60 * 24;
router.use(session({
  secret: "SESS_SECRET:'{}'!@#$$#!SESS_SECRET",
  saveUninitialized: true,
  cookie: {
    maxAge: sess_time
    // sameSite: true,
  },
  resave: false
}));


// REDIRECT LOGIN ==>
const redirectLogin = (req, res, next) => {
  if (!req.session.user_id) {
    res.redirect('/');
  }
  else {
    next();
  }
}


router.get("/", async (req, res) => {
  try {
    req.session.destroy(function (err) {
      if (err) {
        console.log(err);
      } else {
        res.clearCookie();
      }
      res.render('login');
    });
  } catch (error) {
    console.log(error)
    res.redirect('/error');
  }
});

// API for Logout Page ==>
router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err)
    }
    res.clearCookie();
    res.redirect('/')
  })
});


// API for login ==>
router.post('/auth', function (req, response) {
  try {
    let user_id = req.body.user_id;
    let password = req.body.password;

    if (user_id && password) {

      connection.query('SELECT * FROM login_master WHERE user_id = ? AND password = ?', [user_id, password], function (error, results, fields) {
        // console.log();
        if (error) throw error;
        if (results != "") {
          console.log(results);
          req.session.login_session_status = true;
          req.session.name = results[0];
          req.session.user_id = user_id;
          req.session.password = password;
          // console.log(req.session.status, req.session.login_session_status,req.session.branch, req.session.user_id)

          response.redirect('/home');
        }
        else {
          response.redirect('/');
        }
        response.end();
      });
    } else {
      response.send('Please enter Username and Password!');
      response.end();
    }
  }
  catch (error) {
    console.log(error)
  }
});


router.get("/home", redirectLogin, async (req, res) => {
  try {
    console.log(req.session.login_session_status, req.session.name)

    res.render('home',{user_id:req.session.name});
  } catch (error) {
    console.log(error)
    // res.redirect('/error');
  }
});




module.exports = router;