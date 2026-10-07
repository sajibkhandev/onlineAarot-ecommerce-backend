

const UserSchema = require("../models/userSchema");


const otpController = async (req, res) => {
    let { otp, email } = req.body;

    let existingdata = await UserSchema.find({ email: email })
    // console.log(existingdata.length>0);
    if (existingdata.length > 0) {
        if (existingdata[0].otp == otp) {  
            res.send("otp paya geche")
        } else {
            res.send("otp pai nai")
        }

    }else{
        res.send("Invaild Cradritional")
    }






};
module.exports = otpController;
