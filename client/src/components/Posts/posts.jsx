import React from 'react'
import Post from '../Post/post'
import './posts.scss'
export default function Posts({posts}) {
  return (
    <div className='posts'>
    {/* <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/> */}
    {posts.map(p=>(
      <Post post={p}/>
    ))}
    </div>
  )
}
