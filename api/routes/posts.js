const router = require('express').Router();
const Post = require('../models/post');
const User =require('../models/user');


// CREATE 

router.post("/",async (req,res)=>{
 try{
  const newPost=new Post(req.body);
  const post=await newPost.save();
  res.status(200).json(post)
 }catch(err){
  res.status(500).json(err);
 }
});

// UPDATE 

router.put("/:id",async (req,res)=>{
  try{
   const post=await Post.findById(req.params.id);
    if(req.body.username===post.username){
      try{
        const updatedPost= await Post.findByIdAndUpdate(req.params.id,
         {
          $set:req.body,
         }, {new:true}
          );
          res.status(200).json(updatedPost)
      }catch(err){
        res.status(500).json(err);
      }
    }else{
      res.status(401).json("you can only update your post!")
    }
  }catch(err){
    res.status(500).json(err);
  }
})

// DELETE 

router.delete("/:id",async (req,res)=>{
  try{
   const post=await Post.findById(req.params.id);
   if(req.body.username===post.username){
    try{
     await post.delete();
     res.status(200).json("Deleted Succesfully...")
    }catch(err){
      res.status(500).json(err);
    }
   }else{
    console.log("You can delete only your post");
    res.status(401).json("You can delete only your post")
   }
  }catch(err){
    res.status(500).json(err);
  }
});

// GET

router.get("/:id",async(req,res)=>{
 try{
  const post = await Post.findById(req.params.id);
  res.status(200).json(post);
 }catch(err){
  res.status(500).json(err);
 }
});


// GET ALL POSTS

router.get("/",async(req,res)=>{
  const username=req.query.user;
  const catname=req.query.cat;
 try{
   let posts;
   if(username){
    posts = await Post.find({username});
   }else if(catname){
      posts = await Post.find({categories:{
        $in : [catname],
      },})
   }else{
    posts=await Post.find();
   }
   res.status(200).json(posts)
 }catch(err){
  res.status(500).json(err);
 }
});

module.exports=router;