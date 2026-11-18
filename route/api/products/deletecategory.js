const express = require('express')
const _ = express.Router()

const deleteCategoryController = require('../../../controllers/deleteCategoryController')

_.delete('/deletecategory/:id', deleteCategoryController)

module.exports = _
