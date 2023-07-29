// import * as mdb from 'mdb-ui-kit'; // lib
// import { Input } from 'mdb-ui-kit'; // module

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath (import.meta.url));

const app = express ();
const port = 3000;

var userIsAuthorised = false;

app.use(bodyParser.urlencoded ({extended: true}));

function passwordCheck (req, res, next){
	const password = req.body["password"];
	if (password === "ilovechocolate"){
 userIsAuthorised = true;
	}
	next ();
}

app.use(passwordCheck);

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/public/index.html" );
});

app.post("/check", (req, res) => {
	if (userIsAuthorised){
		res.sendFile(__dirname + "/public/secret.html");
	} else {
		res.redirect("/") 
	}
});

function emailCheck (req, res, next){
	const email = req.body ["email"];
	if (email === "triciamm@email.com"){
		userIsAuthorised = true;
	} 
	next ();
}

app.use(emailCheck);

app.get("/", (req, res) =>{
	res.sendFile (__dirname + "public/index.html");
})

app.post ("/check", (req, res) => {
	if(userIsAuthorised){
		res.sendFile (__dirname + "/secret.html");
	}else {
	res.redirect("/");
	}
});

app.listen (port, () => {
	console.log (`Server is running on ${port}`);
});

