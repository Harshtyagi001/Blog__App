import React, { useEffect, useState } from 'react'
import './singlePost.scss'
import {BiEdit} from 'react-icons/bi'
import {FiTrash2} from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios'
// import e from 'express';
import { Context } from '../../context/context';
import { useContext } from 'react';
// import { update } from '../../../../api/models/post';

export default function SinglePost() {

  const location = useLocation();
  // console.log(location);
  const path=location?.pathname?.split("/")[2];
  // console.log(path);
  const [post,setPost]=useState({});
  const {user}=useContext(Context);
  const [title,setTitle]=useState('');
  const [desc,setDesc]=useState('');
  const [updateMode,setUpdateMode]=useState(false);

 useEffect(()=>{
   const getPosts=async ()=>{
    const res= await axios.get("/posts/"+path);
    // console.log(res);
    setPost(res.data)
   }
   getPosts();
 },[path])
 const PF="http://localhost:5000/images/";

 const handleDelete=async()=>{
  try{
    console.log("path: ",path);
    console.log("user: ",user.username);
    console.log("post: ",post.username===user.username);
    await axios.delete(`http://localhost:5000/api/posts/${post._id}`,{data:{user:user.username}});
    window.location.replace("/");
  }catch(err){
    console.log(err);
  }
 }
 
 const handleUpdate=async()=>{
  try{
    await axios.put(`http://localhost:5000/api/posts/${post._id}`,{username:user.username,title,desc});
    window.location.reload();
    setUpdateMode(false);
  }catch(err){
    console.log(err);
  }
 }
 
console.log(updateMode);
  return (
    <div className='singlepost'>
      <div className='singlepost-wrap'>
      {post?.photo ?
       (<img src={ PF+post.photo}/>):
       (<img src='https://images.pexels.com/photos/15286/pexels-photo.jpg?cs=srgb&dl=pexels-luis-del-r%C3%ADo-15286.jpg&fm=jpg' alt='' className='singlepost-img'/>)
      }
        {updateMode ?
         (<input type="text" value={title} className='singlePostTitleInput'  autoFocus onChange={(e)=>setTitle(e.target.value)} />) : (
        <h1 className='singlepost-title'>
          {post.title}
        
        <div className='singlepost-edit'>
          <BiEdit className='singlepost-icon' onClick={()=>setUpdateMode(true)}/>
         <FiTrash2 className='singlepost-icon' onClick={handleDelete}/>
        </div>
        </h1>
        )
        }
        <div className='singlepost-info'>
          <span className='singlepost-author'>Author:
          <Link to={`/?user=${post.username}`} className='link'><b>{post.username}</b></Link>
          {/* <b>{post.username}</b> */}
           </span>
          <span className='singlepost-date'>{new Date(post.createdAt).toDateString()}</span>
        
        </div>
        {updateMode ? (<textarea value={desc} className='singlePostDescInput' onChange={(e)=>setDesc(e.target.value)}/>):(
        <p className='singlepost-desc'> 
        {post.desc}
         </p>
         )}
         {updateMode &&
         <button className='singlePostButton' onClick={handleUpdate}>Update</button>
        }
      </div>
    </div>
  )
}
