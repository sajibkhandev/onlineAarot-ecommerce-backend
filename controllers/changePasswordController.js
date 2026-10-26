const UserScheama = require('../models/userSchema')
const bcrypt = require('bcrypt');
const changePasswordController = async (req, res) => {
    let { newpassword, email } = req.body

    bcrypt.hash(newpassword, 10, async function (err, hash) {
        let findemailandupdatepasswrod = await UserScheama.findOneAndUpdate({ email: email }, { password: hash })
        res.send({ success: "password Chagnd" })
        console.log("done");



    });








}
module.exports = changePasswordController;