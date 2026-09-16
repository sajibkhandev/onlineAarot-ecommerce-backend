const emailRegex = require("../utiles/emailRegex")
const passwordRegex = require("../utiles/passwordRegex")


const registrationController=(req,res)=>{
    let {username,email,password}=req.body
   
   if(!username){
    res.send("username is required")
   }else if(!email){
    res.send("email is required")
   }else if(!emailRegex(email)){
    res.send("valid email required");
   }
   else if(!password){
    res.send("password is required")
   }
   else{
    console.log(req.body);
    
   }
   
    

}
module.exports=registrationController