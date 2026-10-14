

const UserSchema = require("../models/userSchema");
var jwt = require('jsonwebtoken');


const otpController = async (req, res) => {
    let { otp, email } = req.body;

    var decoded = jwt.verify(email, 'sajibkhan');
// console.log(decoded.email)
    // console.log(email)

    let existingdata = await UserSchema.find({ email: decoded.email })
    // console.log(existingdata.length>0);
    if (existingdata.length > 0) {
        if(!existingdata[0].emailVerification){
            if (existingdata[0].otp == otp) { 
            await UserSchema.findOneAndUpdate({email:decoded.email},{otp:""},) 
            await UserSchema.findOneAndUpdate({email:decoded.email},{emailVerification:true},) 
            res.send({success:"Otp match"})
        } else {
            res.send({error:"Otp not match"})
        }
            

        }else{
            res.send({error:"Invaild Code"})

        }

    }else{
        res.send({error:"Invaild Cradritional"})
    }






};
module.exports = otpController;
