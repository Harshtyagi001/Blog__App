const router = require('express').Router();
const User = require('../models/user');
const Post = require('../models/post');
const bcrypt=require('bcrypt');

// UPDATE 
router.put("/:id", async (req,res)=>{

  if(req.body.userId === req.params.id){
    if(req.body.password){
      const salt= await bcrypt.genSalt(10);

      req.body.password = await bcrypt.hash(req.body.password,salt);
    }
    try{
    const updatedUser = await User.findByIdAndUpdate(req.params.id,{
      $set:req.body,
    },{new:true});
    res.status(200).json(updatedUser);
    } catch(err){  
     res.status(500).json(err);
    }
  }else{
    res.status(401).json("You can update only your account!")
  }
 
})

// DELETE on comparing with ID's

// router.delete("/:id", async (req,res)=>{
//   if(req.body.userId === req.params.id){
//     try{
//       // res.status(300).json("outer try eneter")
//       const user = await User.findById(req.params.id);
//       try{
//         // res.status(300).json("innner try enter")
//         //  await Post.deleteMany({username:user.username});
//         //  res.status(300).json("innner try mid")
//         //  await User.findByIdAndDelete(req.params.id);
//             user.delete(); // use this or above one
//          res.status(200).json("User has been deleted...")
//       }catch(err){
//         res.status(500).json(err);
//       }
//     }catch(err){
//       res.status(404).json("User not found!")
//     }
//   }else{
//     res.status(401).json("You can delete only your account!");
//   }
// });

// DELETE on comparing with UserNames

router.delete("/:id",async (req,res)=>{
  try{
   const user=await User.findById(req.params.id);
   if(user.username===req.body.username){
     try{
       user.delete();
       res.status(200).json("Succesfully deleted...")
     }catch(err){
      res.status(500).json(err);
     }
   }else{
    res.status(401).json("You can only delete your account!")
   }
  }catch(err){
    res.status(500).json(err);
  }
})

// GET USER

router.get("/:id",async (req,res)=>{
  try{
    const user =await User.findById(req.params.id);
    const {password,...others}=user._doc;
    res.status(200).json(others);
  }catch(err){
    res.status(500).json(err);
  }
});

module.exports = router