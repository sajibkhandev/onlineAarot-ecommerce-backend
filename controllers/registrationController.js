const emailRegex = require("../utiles/emailRegex")
const passwordRegex = require("../utiles/passwordRegex")
const UserSchema = require('../models/userSchema')
const bcrypt = require('bcrypt');
const otpGenerator = require('otp-generator');
const emailSender = require("../utiles/emailSender");



const registrationController = async (req, res) => {
    let { username, email, password } = req.body

    if (!username) {
        res.send("username is required")
    } else if (!email) {
        res.send("email is required")
    } else if (!emailRegex(email)) {
        res.send("valid email required");
    }
    else if (!password) {
        res.send("password is required")
    }
    else {

        let existinguser = await UserSchema.find({ email: email })
        if (existinguser.length > 0) {
            res.send("Data Already Existed");

        } else {

            bcrypt.hash(password, 10, function (err, hash) {
                let otp = otpGenerator.generate(6,
                    {
                        upperCaseAlphabets: false,
                        specialChars: false,
                        lowerCaseAlphabets: false
                    })

                const data = new UserSchema({
                    username: username,
                    email: email,
                    password: hash,
                    otp: otp,
                   
                    
                })

                data.save()
                res.send({
                    username: data.username,
                    email: data.email,
                    success: "registration successfully"

                })


                // Send Email
                emailSender(email,otp)
                
                


              








            });

        }





    }

}
module.exports = registrationController