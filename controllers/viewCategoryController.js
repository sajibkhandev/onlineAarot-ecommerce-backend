
const Category = require('../models/categorySchema')
const viewCategoryController= async (req,res)=>{
  let allcategory= await Category.find({}).populate("categoryowerid")
  res.send(allcategory)


}
module.exports = viewCategoryController