var a=require("express");
var e=a();

e.get("/",function(req,res)
			{
				res.send("This is my Node APP in AWS");
			}
	);

e.listen(5000);