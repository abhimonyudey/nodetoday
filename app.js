var a=require("express");
var e=a();

e.get("/",function(req,res)
			{
				res.send("Happy Friday");
			}
	);

var p=process.env.port || 5000;
e.listen(p);