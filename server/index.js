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
    password: "password",
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
                console.log("New User Registered")
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
                console.log("Values inserted into Logindetails DB")
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
            console.log("All Values Deleted from logindetails DB")
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
                console.log("Quiz DB Values Inserted");
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

// Questions Interface ========================================================
app.post("/addNewQuestion", (req, res) => {
    const quID = req.body.quID;
    const quQuizID = req.body.quQuizID;
    const quType = req.body.quType;
    const quQuestion = req.body.quQuestion;
    const quAnswer = req.body.quAnswer;
    const quWrrAnswer1 = req.body.quWrrAnswer1;
    const quWrrAnswer2 = req.body.quWrrAnswer2;
    const quWrrAnswer3 = req.body.quWrrAnswer3;
    const quWrrAnswer4 = req.body.quWrrAnswer4;
    const quWrrAnswer5 = req.body.quWrrAnswer5;

    db.query(
        "INSERT INTO questions (id, QuizID, Type, Question, Answer, WrrAnswer1, WrrAnswer2, WrrAnswer3, WrrAnswer4, WrrAnswer5) VALUES (?,?,?,?,?,?,?,?,?,?)",
        [quID, quQuizID, quType, quQuestion, quAnswer, quWrrAnswer1, quWrrAnswer2, quWrrAnswer3, quWrrAnswer4, quWrrAnswer5],
        (err, result) => {
            if (err) {
                console.log("🚀 ~ file: index.js ~ line 252 ~ app.post ~ err", err)
            } else {
                console.log("🚀 ~ file: index.js ~ line 251 ~ app.post ~ result", result)
                res.send("Values Inserted");
            }
        }
    )
})

app.get("/getQuestionList", (req, res) => {
    db.query("SELECT * FROM questions", (err, result) => {
        if (err) {
            console.log("🚀 ~ file: index.js ~ line 264 ~ db.query ~ err", err)
        } else {
            console.log("🚀 ~ file: index.js ~ line 263 ~ db.query ~ result", result)
            res.send(result)
        }
    })
})

app.post('/deleteAllQuestions', (req, res) => {
    db.query("DELETE FROM questions", (err, result) => {
        if (err) {
            console.log("🚀 ~ file: index.js ~ line 275 ~ db.query ~ err", err)
        } else {
            console.log("🚀 ~ file: index.js ~ line 274 ~ db.query ~ result", result)
            res.send("All Values Deleted")
        }
    })
})

// Teacher Calls ==============================================================
app.post("/searchStudent", (req, res) => {
    var fName = req.body.studentFName;
    var lName = req.body.studentLName;

    console.log(fName);
    console.log(lName);
    
    if (fName && lName) {
        fName = '%' + fName + '%';
        lName = '%' + lName + '%';
        db.query(
            "SELECT * FROM userprofiles WHERE FirstName LIKE ? OR LastName LIKE ?",
            [fName, lName],
            (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("🚀 ~ file: index.js ~ BOTH ~ app.post ~ result", result)
                    res.send(result);
                }
            }
        )
    } else if (fName) {
        fName = '%' + fName + '%';
        db.query(
            "SELECT * FROM userprofiles WHERE FirstName LIKE ?",
            [fName],
            (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("🚀 ~ file: index.js ~ line fNameTrue ~ app.post ~ result", result)
                    res.send(result);
                }
            }
        )
    } else if (lName) {
        lName = '%' + lName + '%';
        db.query(
            "SELECT * FROM userprofiles WHERE LastName LIKE ?",
            [lName],
            (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("🚀 ~ file: index.js ~ LASTNAME ~ app.post ~ result", result)
                    res.send(result);
                }
            }
        )
    }

});


