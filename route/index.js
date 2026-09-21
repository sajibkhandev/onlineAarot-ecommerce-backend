const express = require('express')
const _ = express.Router()
const Authentication=require('./api/index')

_.use(`${process.env.API_URI}`,Authentication)

module.exports=_