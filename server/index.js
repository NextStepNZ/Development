const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require('cors');

app.use(cors());
app.use(express.json());

// DB Connection ===============================================================
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "nextstepnz",
});

// Server Startup and Port Confirmation ========================================
app.listen(3001, () => {
    console.log("Server is live on port 3001");
});

// DB READ WITE TEST ==========================================================
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

app.post("/deleteAllUsers", (req, res) => {
    db.query("DELETE FROM logindetails", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send("All Values Deleted")
        }
    })
})

app.get("/getUserList", (req, res) => {
    db.query("SELECT * FROM logindetails", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
});

// UserProfiles Interface =====================================================
app.post("/addNewProfile", (req, res) => {
    const pType = req.body.pType;
    const pFirstName = req.body.pFirstName;
    const pLastName = req.body.pLastName;
    const pEmail = req.body.pEmail;
    const pUsername = req.body.pUsername;
    const pPassword = req.body.pPassword;
    const pGroupID = req.body.pGroupID;

    db.query(
        "INSERT INTO userprofiles(Type, FirstName, LastName, Email, Username, Password, GroupID) VALUES (?,?,?,?,?,?,?)",
        [pType, pFirstName, pLastName, pEmail, pUsername, pPassword, pGroupID],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("values inserted");
            }
        }
    );
});

app.get("/getProfileList", (req, res) => {
    db.query("SELECT * FROM userprofiles", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.post("/deleteAllProfiles", (req, res) => {
    db.query("DELETE FROM userprofiles", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send("All Values Deleted")
        }
    })
})