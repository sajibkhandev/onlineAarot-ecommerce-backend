const express = require('express')
const _ = express.Router()
const Registration =require('./auths/registration')
const Login =require('./auths/login')
const Otp =require('./auths/otp')
const Forgetpassword =require('./auths/forgetpassword')
const Changepassword =require('./auths/changepassword')
const Createcategory =require('./products/createcategory')
const Viewcategory =require('./products/viewcategory')

_.use('/authentication',Registration)
_.use('/authentication',Login)
_.use('/authentication',Otp)
_.use('/authentication',Forgetpassword)
_.use('/authentication',Changepassword)

_.use('/product',Createcategory)
_.use('/product',Viewcategory)

module.exports=_