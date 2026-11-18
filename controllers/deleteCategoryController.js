const mongoose = require('mongoose')
const Category = require('../models/categorySchema')

const deleteCategoryController = async (req, res) => {
  const { id } = req.params

  const deletedCategory = await Category.findByIdAndDelete(id)

    if (!deletedCategory) {
    res.send({ error: 'Category not found' })
    }

     res.send({ success: 'Category Deleted' })

}

module.exports = deleteCategoryController
