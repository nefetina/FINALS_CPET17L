const express = require("express");
const mysql = require("mysql2");
const app = express();
const db = "cpet17l";
const db_table = "motion";
const bodyParser = require('body-parser')
const cors = require("cors");

app.use(cors());

const port = process.env.port || 3000;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: `${db}`,
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use(express.json())

app.post("/app", async(req, res) => {
  const username = req.body.username
  const email = req.body.email
  const password = req.body.password
  const repassword = req.body.cpass
  const bcrypt = require('bcryptjs');
  const salt = bcrypt.genSaltSync(10);
  const encrypt = await bcrypt.hash(password, salt)

  const query = "SELECT * from users where email=? AND username=?";
  const params = [email, username]
  connection.query(query, params, (err, rows) => {
      if (err) throw err;
      //
      var output = {}
      if (username == "" || email == "" || password == "") {
          output["message"] = "Please fill up the necessary informations needed";
      } else if (password != repassword) {
          output["message"] = "Password does not match";
      } else {
          if (rows.length != 0) {
              console.log('User already exists')
              output["message"] = "User already exists";
          } else {
              console.log('Successfully Registered')
              output["message"] = "Successfully Registered";
              connection.query(
                  "INSERT INTO users (username, email, password) VALUES (?,?,?)", [username, email, encrypt],
              );
          }
      }

      res.json(output)

  });

});

app.post("/LogIn", (request, response) => {
  const user = request.body.username
  const pass = request.body.password
  console.log(user)
  const query = "SELECT password from users where username=?";
  const params = [user]
  connection.query(query, params, (err, rows) => {

      if (err) throw err;
      //
      var output = {}

      if (rows.length != 0) {
          var password_hash = rows[0]["password"];
          const bcrypt = require('bcryptjs');
          const verified = bcrypt.compareSync(pass, password_hash);
          if (verified) {
              output["status"] = 1;
              output["message"] = "Verified";
              console.log('verified')
          } else {
              console.log('invalid credentials')
              output["status"] = 0;
              output["message"] = "Invalid password";
          }

      }else if (user == "" || pass == ""){
        console.log('invalid')
        output["message"] = "Please fill up the form";

    }
       else {
          console.log('invalid')
          output["message"] = "Invalid username and password";
      }
      response.json(output)

  });
})

app.post("/forgotpass", async(request, response) => {
  const email = request.body.email
  const newpassword = request.body.newpassword
  const newpassword1 = request.body.newpassword1
  const query = "SELECT password from users where email=?";
  const params = [email]
  const bcrypt = require('bcryptjs');
  const salt = bcrypt.genSaltSync(10);
  const encrypt = await bcrypt.hash(newpassword, salt)
  const queryc = "SELECT * from users where email=?";
  
  connection.query(queryc, params, (err, rows) => {
      if (err) throw err;
      //
      var output = {}
      if (rows.length != 0) {
          console.log('Email found')
          connection.query(query, params, (err, rows) => {
            if (err) throw err;
            //
            var output = {}
            if (newpassword != newpassword1) {
                output["message"] = "Password does not match";
            } else if (newpassword == "" || newpassword1 == "") {
                output["message"] = "Please fill up the necessary information needed";
            } else {
                if (rows.length != 0) {
                    connection.query(
                        "UPDATE users SET password = ? WHERE email = ?;", [encrypt, email],
                    );
                    console.log('Successfully Reset Password')
                    output["message"] = "Successfully Reset Password";
      
                }
                 else {
                    console.log('An Error Occured')
                    output["message"] = "An Error Occured";
                }
            }
            response.json(output)
      
        });

      } else {
          console.log('could not find email')
          
      }
      

  });
})

app.use(bodyParser.json({limit:1024*1024*20, type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true,limit:1024*1024*20,type:'application/x-www-form-urlencoding' }));
 app.post('/capture', (req, res)=> {
  var {date_time, capture} = req.body;
  connection.query(`INSERT INTO ${db_table} (date_time, capture) VALUES (?, ?);`,
  [date_time, capture],
  (err, result)=>{
    try {
      if (result.affectedRows > 0) {
        res.json({data: "Success"});
      } else {
        res.json({message: "Error"});
      }
    } catch {
      res.json({message: err});
    }
  })
 })


app.get('/render-image', (req, res)=> {
  // Select the last entry from the db
  let list = [];
  connection.query(`SELECT * FROM ${db_table} ORDER BY id ASC;`,
  (err, results)=> {
    try {
      if (results.length > 0) {
        for ( i=0; i<results.length; i++ ) {
          list.unshift(results[i])
        }
        // send a json response containg the image data (blob)
        res.json({'images': list});

            
      } else {
        res.json({ message: "Something went wrong." });
      }
      } catch {
          res.json({ message: err });
      }
  })
})
app.get('/data', (req, res)=> {
  // Select the last entry from the db
  connection.query(`SELECT * FROM ${db_table} ORDER BY id DESC;`,
  (err, results)=> {
      try {
          if (results.length > 0) {
            let new_result = [];
            for (let i = 0; i < results.length; i++) {
                new_result.push({
                    capture: new Buffer.from({'imgData': results[i]['capture']}, 'base64').toString("utf8"),
                })
            }
            res.json(new_result)
      } else {
        res.json({ message: "Something went wrong." });
      }
      } catch {
          res.json({ message: err });
      }
  })
})


