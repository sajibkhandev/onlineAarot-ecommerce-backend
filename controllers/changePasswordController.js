const UserScheama = require('../models/userSchema')
const changePasswordController= async (req,res)=>{
    let {newpassword,email}=req.body

    let findemailandupdatepasswrod= await UserScheama.findOneAndUpdate({email:email},{password:newpassword})
    res.send({success:"password Chagnd"})
    console.log("done");
    
    



   

}
module.exports = changePasswordController;