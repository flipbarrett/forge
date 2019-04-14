const express     = require("express"),
	  app	      = express(),
 	  bodyParser  = require("body-parser"),
	  mongoose    = require("mongoose"),
	  flash       = require("connect-flash"); 

app.use(bodyParser. urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(flash());
	  app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The Forge is lit."); 
});
