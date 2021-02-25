/**packages */
const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");

/** app configuration */
// access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDI1ODI0MDMsImRhdGEiOnsidXNlcm5hbWUiOiIwODA0IiwiaWQiOiI1Zjg0Y2MyMmQwOTg5YzBjNjg2ZGIyODkiLCJyb2xlIjoxfSwiaWF0IjoxNjAyNTM4NjAzfQ.ls75Di_uRn889FqICkyw2zYy5NMYYAZ-kqV30ha3Ymw

const app = express();
const port = config.get("server-port");
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded(
    {extended: true}
);
console.log("appjs");
app.use(jsonParser);
app.use(urlEncodedParser);

const ipFn = require("./middleware/getIpAddres");
app.use("*",ipFn);

/**Methods */
app.get("/",(req, res, next) =>{
    res.send("Welcome to academic rest api");
});

// ------------------------------------------------                   
//token middleware
tkfn= require("./middleware/verfyToken");
app.use(tkfn);
// ------------------------------------------------

//user Routes loading
const userRoutes = require ("./routes/user.routes");
userRoutes(app);

//Student Routes Loading
const StudentRoutes = require ("./routes/student.routes");
console.log("despues studen ");
StudentRoutes(app);

//teacher Routes loading
const teacherRoutes = require ("./routes/teacher.routes");
teacherRoutes(app);

//period Routes loading
const periodRoutes = require ("./routes/period.routes");
periodRoutes(app);

//course Routes loading
const courseRoutes = require ("./routes/course.routes");
courseRoutes(app);

app.listen(port,() => {
    console.log("Server is running");
});