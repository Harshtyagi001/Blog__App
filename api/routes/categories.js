const router=require('express').Router();
const Category=require('../models/category');


// CREATE

router.post("/",async(req,res)=>{
   const newCategory= new Category(req.body);
  try{
     const savedCategory =  await newCategory.save();
     res.status(200).json(savedCategory);
  }catch(err){
    res.status(500).json(err);
  }
});

// GET ALL CATEGORIES

router.get("/",async(req,res)=>{
  try{
    const allCats= await Category.find();
    res.status(200).json(allCats)
  }catch(err){
   res.status(500).json(err);
  }
 });

 // GET ONE CATEGORY (id ka koi kaam nahi)

//  router.get("/:id",async (req,res)=>{
//   // const cat= Category.find(req.params.id); 
//   try{
//     const cat=await Category.findOne({name:req.body.name}); // yaha output bas name ke according aa rhaa hai id ka kuch kaam nahi horaha 

//     !cat && res.status(401).json("Not a category!")

//     res.status(200).json(cat)
//   }catch(err){
//     res.status(500).json(err);
//   }
//  });


// GET ONE CAT USING ID

router.get("/:id",async(req,res)=>{
 try{
  const cat =await Category.findById(req.params.id);
  
  res.status(200).json(cat);
 }catch(err){
  res.status(500).json(err);
 }
});

module.exports=router;