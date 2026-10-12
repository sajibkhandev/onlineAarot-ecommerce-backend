

const UserSchema = require("../models/userSchema");


const otpController = async (req, res) => {
    let { otp, email } = req.body;

    let existingdata = await UserSchema.find({ email: email })
    // console.log(existingdata.length>0);
    if (existingdata.length > 0) {
        if (existingdata[0].otp == otp) { 
            await UserSchema.findOneAndUpdate({email:email},{otp:""},) 
            await UserSchema.findOneAndUpdate({email:email},{emailVerification:true},) 
            res.send({success:"Otp match"})
        } else {
            res.send({error:"Otp not match"})
        }

    }else{
        res.send({error:"Invaild Cradritional"})
    }






};
module.exports = otpController;
