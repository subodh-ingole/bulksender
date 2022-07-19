//jshint esversion:6
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect(
	'mongodb://localhost:27017/hackathonDB',
);



app.get("/",function(req,res){
	res.render("login");
})



let port = process.env.PORT;
if (port == null || port == "") {
	port = "3000";
}

app.listen(port, function () {
	console.log("Server has started sucessfully");
});
