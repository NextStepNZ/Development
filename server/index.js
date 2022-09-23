const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Establish Database Connection

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "$r00tpwd211",
    database: "nextstepnz",
});

// Login System.
app.post("/register", (req, res) => {


    const password = req.body.password
    const email = req.body.email
    const firstname = req.body.firstname
    const lastname = req.body.lastname

    db.query(
        "INSERT INTO userprofiles(Type, FirstName, LastName, Email, Username, Password, GroupID) VALUES ('Student',?,?,?,'Test',?,'ABC123')",
        [firstname, lastname, email, password],
        (err, res) => {
            //if (err) {
                console.log(err)
            //} else {
             //   res.send("User Registered")
            //}
        }
    );
});

app.post("/login", (req, res) => {
    const email = req.body.email
    const password = req.body.password

    db.query(
        "SELECT * FROM userprofiles WHERE email = ? AND password = ?",
        [email, password],
        (err, result) => {
            if (err) {
                console.log(err)
                res.send({ err: err })
            }
            if (result.length > 0) {
                console.log(result)
                res.send(result)
            } else {
                res.send({ message: "Email or Password is Incorrect!" })
            }

        }
    );
});



// Add user page.
app.post("/addUser", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "INSERT INTO logindetails(userName, password) VALUES (?,?)",
        [username, password],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("values inserted");
            }
        }
    );
});

// Delete Users.
app.post("/deleteAllUsers", (req, res) => {
    db.query("DELETE FROM logindetails", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send("All Values Deleted")
        }
    })
})

// Get list of users.
app.get("/getUserList", (req, res) => {
    db.query("SELECT * FROM logindetails", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })

});

app.listen(3001, () => {
    console.log("Server is live on port 3001");
});
