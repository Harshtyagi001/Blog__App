import React from 'react'
import Sidebar from '../../components/Sidebar/sidebar'
import './settings.scss'
import {HiOutlineUserCircle} from 'react-icons/hi'
export default function Settings() {
  return (
    <div className='settings'>
      <div className='wrapper'>
        <div className='title'>
          <span className='update'>Update Your Account</span>
          <span className='delete'>Delete Account</span>
        </div>
        <form className='settings-form'>
          <label>Profile Picture</label>
          <div className='profile'>
            <img src='https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt=''/>
            <label htmlFor='fileinput'>
              <HiOutlineUserCircle className='icon'/>
            </label>
             <input type='file' id='fileinput' style={{display:'none'}}/>
          </div>
          <label>Username</label>
          <input type='text' placeholder='Harsh'/>
          <label>Email</label>
          <input type='email' placeholder='abc@email.com'/>
          <label>Password</label>
          <input type='password' placeholder='Enter-password'/>
          <button className='submit'>Update</button>
        </form>
      </div>
      <Sidebar/>
    </div>
  )
}
