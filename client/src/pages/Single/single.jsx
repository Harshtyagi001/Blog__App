import React from 'react'
import Sidebar from '../../components/Sidebar/sidebar'
import SinglePost from '../../components/SinglePost/singlePost'
import './single.scss'
export default function Single() {
  return (
    <div className='single'>
    <SinglePost/>
      <Sidebar/>
    </div>
  )
}
