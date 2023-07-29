import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";


const app = express ();
const port = 3000;

app.get("/", (req, res)=>{
	const today = new Date();
	let day = today.getDay();
	//console.log(day);
	let type = "a weekday";
	let adv = "work hard";

	if (day === 0 || day === 6){
		type = "the weekend";
	   adv = "time to rest!";
	}

	res.render("index.ejs", {dayType: type, advice: adv,});
});


app.listen(port, ()=>{
	console.log(`Server running on port ${port}`);
})