const express = require("express"),
			bodyParser = require("body-parser"),
	 		app = express();

app.get("/", function(req, res) {
	res.render("index");
});

app.get("/contacts", function(req, res) {
	res.send("This is the contacts page.");
});

app.post("/contacts/new", function(req, res) {
	res.send("This is the post route.");
});

app.listen(8000, function(){
	console.log("Server is running");
});
