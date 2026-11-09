const CategorySchema =require('../models/categorySchema')

const createCategoryController=async(req,res)=>{
    let { categoryname,categoryowerid }=req.body
    console.log(categoryname);
  let existingCategory =  await CategorySchema.find({categoryname:categoryname})
  console.log();
  if(existingCategory.length>0){
    res.send({error:"Category Existed"})

  }else{
    let category =  new CategorySchema({
        categoryname,
        categoryowerid
    })

    category.save()
    res.send({success:"Category Created"})
    
    

  }
  
    

   
    

}

module.exports = createCategoryController