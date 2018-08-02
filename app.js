const express = require("express"),
    bodyParser = require("body-parser"),
    cors = require("cors"),
    app = express(),
    database = require("./database-connection");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.get("/", (req, res) => {
    // const db = database("students").select();
    // console.log(db);
    // // res.json({ db });
    // res.json(db);
    // queries.list().then(studentData => {
    //     res.json({ studentData });
    // });
    res.send("Whatever the hell you want your message to be");
});

// app.use(function(err, req, res) {
//     if (err) {
//         res.status(404).json({
//             error: {
//                 message: "No record found!"
//             }
//         });
//     }
// });

// app.get("/:id", (req, res) => {});

module.exports = app;
