const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "nextstepnz",
});

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

app.listen(3001, () => {
    console.log("Server is live on port 3001");
});
