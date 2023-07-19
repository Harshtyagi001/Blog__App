import React from 'react'
import { useState,useEffect } from 'react'
import api from '../../api'
import Header from '../../components/Header/header'
import Posts from '../../components/Posts/posts'
import Sidebar from '../../components/Sidebar/sidebar'
import './home.scss'
import { useLocation } from 'react-router-dom'
import { useContext } from 'react'
import {Context} from '../../context/context'

export default function Home() {


  const [posts,getPosts]=useState([]);
  // const location=useLocation();
  // console.log(location)
  const {search}=useLocation();
  console.log(search)
  useEffect(()=>{
   const fetchPosts=async()=>{
   const res=await api.get("/posts"+search);
   getPosts(res.data);
   console.log(res);
   }
   fetchPosts();
  },[search]);

  return (
    <>
    <Header/>
    <div className='home'>
      <Posts posts={posts}/>
      <Sidebar/>
    </div>
    </>
  )
}
