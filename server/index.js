const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Establish Database Connection

// DB Connection ===============================================================
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "$r00tpwd211",
    database: "nextstepnz",
});

// Server Startup and Port Confirmation ========================================
app.listen(3001, () => {
    console.log("Server is live on port 3001");
});

// Authentication endpoints ====================================================
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
            if (err) {
                console.log(err)
            } else {
                res.send("User Registered")
            }
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

// DB READ WITE TEST ==========================================================
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

// Group interface ============================================================
app.post("/addNewGroup", (req, res) => {
    const gOwnerID = req.body.gOwnerID;
    const gName = req.body.gName;
    const gAssignedQuiz = req.body.gAssignedQuiz

    db.query(
        "INSERT INTO `groups`(OwnerID, Name, AssignedQuizes) VALUES (?,?,?)",
        [gOwnerID, gName, gAssignedQuiz],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("values inserted");
            }
        }
    );
});

app.get("/getGroupList", (req, res) => {
    db.query("SELECT * FROM `groups`", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.post("/deleteAllGroups", (req, res) => {
    db.query("DELETE FROM `groups`", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send("All Values Deleted")
        }
    })
})

// Quizzes Interface ==========================================================
app.post("/addNewQuiz", (req, res) => {
    const qID = req.body.qID;
    const qName = req.body.qName;

    db.query(
        "INSERT INTO quizzes (id, name) VALUES (?,?)",
        [qID,qName],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
                res.send("Values Inserted");
            }
        }
    )
})

app.get("/getQuizList", (req, res) => {
    db.query("SELECT * FROM quizzes", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.post('/deleteAllQuizzes', (req, res) => {
    db.query("DELETE FROM quizzes", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send("All Values Deleted")
        }
    })
})