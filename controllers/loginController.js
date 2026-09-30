const emailRegex = require("../utiles/emailRegex");
const passwordRegex = require("../utiles/passwordRegex");
const UserSchema = require("../models/userSchema");
const bcrypt = require("bcrypt");

const loginController = async (req, res) => {
  let { email, password } = req.body;
  if (!email) {
    res.send("email is required");
  } else if (!emailRegex(email)) {
    res.send("valid email required");
  } else if (!password) {
    res.send("password is required");
  } else {
    let existingData = await UserSchema.find({ email: email });
    if (existingData.length > 0) {
      
      bcrypt.compare(password, existingData[0].password, function (err, result) {
        if(err){
           res.send({ error: "Invaild Creadiential" });
        }else{
          if(result){
            res.send({success:"login successfully"})
          }else{
             res.send({ error: "Invaild Creadiential" });
          }

        }
      });

    } else {
      res.send({ error: "Invaild Creadiential" });
    }
  }
};
module.exports = loginController;
