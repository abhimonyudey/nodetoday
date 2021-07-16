var a=require("express");
var e=a();

e.get("/",function(req,res)
			{
				res.send("This is my new Node APP in AWS");
			}
	);

var p=process.env.port || 5000;
e.listen(p);