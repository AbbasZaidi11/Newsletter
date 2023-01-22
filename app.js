const express=require("express");
const app=express();
const request=require("request");
const bodyParser = require ("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

const https=require("https");

app.use(express.static("public"));

app.listen(3000,function(){
  console.log("Server is running on port 3000");
});

app.get("/",function(req,res){
  res.sendFile(__dirname+"/signup.html");
});

app.post("/",function(req,res){
  var firstName=req.body.firstname;
  console.log(firstName);
  var lastName=req.body.lastname;
  console.log(lastName);
  var email=req.body.email;
  console.log(email);

  const data={
    members:[
      {
        email_address:email,
        status:"subscribed",
        merge_fields:{
          FNAME:firstName,
          LNAME:lastName
        }
      }
    ]
  };

  const jsonData=JSON.stringify(data);
  
  https.request(url,options,function(response){})


});
//API Keys
//e327022ff707f1b60837c8a314f17725-us9
//unique
//b5de3d4f08
