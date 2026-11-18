const express = require('express')
const _ = express.Router()

const updateCategoryController = require('../../../controllers/updateCategoryController')

_.put('/updatecategory/:id', updateCategoryController)

module.exports = _
