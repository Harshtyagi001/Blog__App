import React, { useEffect, useState } from 'react'
import { BsInstagram,BsLinkedin,BsTwitter,BsGithub,BsSearch } 
from 'react-icons/bs';
import './sidebar.scss'
import axios from 'axios'
import { Link } from 'react-router-dom';
export default function Sidebar() {

  const [cat,setCat]=useState([]);

  useEffect(()=>{
   const getCats=async ()=>{
    const res=await axios.get("/categories")
    setCat(res.data);
    console.log(res.data);
   }
   getCats();
  },[])
  return (
    <div className='sidebar'>
      <div className='sidebar-item'>
        <span className='sidebar-title'>
          ABOUT ME
        </span>
        <img src='https://images.pexels.com/photos/15286/pexels-photo.jpg?cs=srgb&dl=pexels-luis-del-r%C3%ADo-15286.jpg&fm=jpg'/>
        <p>This is a mysterious forest I have ever travelled . There is som esuspicious activities over there enlights on time travel!</p>
      </div>
      <div className='sidebar-item'>
        <span className='sidebar-title'>CATEGORIES</span>
        <ul className='sidebar-list'>
        {cat.map(c=>(
          <Link to={`/?cat=${c.name}`} className='link'>
          <li className='list-item'>{c.name}</li>
          </Link>
          
        ))}
        {/* <li className='list-item'>Nature</li>
        <li className='list-item'>Music</li>
        <li className='list-item'>Style</li>
        <li className='list-item'>Sport</li>
        <li className='list-item'>Tech</li>
        <li className='list-item'>Cinema</li> */}
        </ul>
      </div>
      <div className='sidebar-item'>
        <span className='sidebar-title'>FOLLOW US</span>
        <div className='sidebar-socials'>
        <a href=''><BsLinkedin className='ic'/></a>
        <a href=''><BsTwitter className='ic'/></a>
        <a href=''><BsInstagram className='ic'/></a>
        <a href=''><BsGithub className='ic'/></a>
        </div>
      </div>
    </div>
  )
}
