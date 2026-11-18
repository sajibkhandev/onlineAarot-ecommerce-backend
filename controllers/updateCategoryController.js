const mongoose = require('mongoose')
const Category = require('../models/categorySchema')

const updateCategoryController = async (req, res) => {
  const { id } = req.params
  const categoryname = typeof req.body.categoryname === 'string'
    ? req.body.categoryname.trim()
    : ''

   const existingCategory = await Category.findOne({
      categoryname,
      _id: { $ne: id },
    })

    if (existingCategory) {
      return res.status(409).json({ error: 'Category Existed' })
    }

    const category = await Category.findByIdAndUpdate(
      id,
      { categoryname },
      { new: true, runValidators: true }
    )

    if (!category) {
      return res.status(404).json({ error: 'Category not found' })
    }

    return res.json({ success: 'Category Updated', category })


}

module.exports = updateCategoryController
