import React, { useContext } from 'react'
import './topbar.scss'
import { BsInstagram,BsLinkedin,BsTwitter,BsGithub,BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Context } from './../../context/context';
export default function Topbar() {
  const {user,dispatch}=useContext(Context) ;
  // const user=false;
  
  const handleLogout=()=>{
    dispatch({type:"LOGOUT"})
  }

  return (
    <div className='top'>
    <div className='left'>
    <a href=''><BsLinkedin className='ic'/></a>
    <a href=''><BsTwitter className='ic'/></a>
    <a href=''><BsInstagram className='ic'/></a>
    <a href=''><BsGithub className='ic'/></a>
    </div>
    <div className='center'>
      <ul className='list'>
      <Link className='link' to='/'>
      <li className='list-item'>HOME</li>
      </Link>
      <Link className='link' to='/'>
      <li className='list-item'>ABOUT</li>
      </Link>
      <Link className='link' to='/'>
      <li className='list-item'>CONTACT</li>
      </Link>
      <Link className='link' to='/write'>
      <li className='list-item'>WRITE</li>
      </Link>
      <Link className='link' to='/'>
      <li className='list-item' onClick={handleLogout}>{user&&'LOGOUT'}</li>
      </Link>
      </ul>
    </div>
    <div className='right'>
    {user?(
      <img className='top-img' src={user.profilePic} alt=''/>
    ):(
      <ul className='right-list'>
      <Link className='link' to='/login'>
      <li className='list-item'>LOGIN</li>
      </Link>
      <Link className='link' to='/register'>
      <li className='list-item'> REGISTER</li>
      </Link>
      </ul>
    )
            
    }
     
    </div>
    </div>
  )
}
