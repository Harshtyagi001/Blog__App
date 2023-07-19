// import React from 'react'
// import './post.css'
// export default function Post() {
//   return (
//     <div className='post'>
//       <img className='post-img' src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hallstatt-village-and-hallstatter-see-lake-in-royalty-free-image-1578000553.jpg?crop=0.668xw:0.998xh;0.285xw,0.00244xh&resize=640:*' alt=''/>
//        <div className='post-info'>
//        <div className='post-catg'>
//        <span className='cat'>Travel</span>
//        <span className='cat'>Music</span>
//        </div>
//        <span className='post-title'>This is thya dummy post title that i am usng</span>
//        <hr/>
//        <span className='post-date'>1 hour ago</span>
//        </div>
//     </div>
    
//   )
// }

import { Link } from "react-router-dom";
import "./post.css";

export default function Post({post}) {
  const PF="http://localhost:5000/images/";
  return (
    <div className="post">
    {post?.photo ? (
      <img 
        className="postImg"
        src={PF+post.photo}
        alt=""
      />
    ):
    (
      <img
        className="postImg"
        src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hallstatt-village-and-hallstatter-see-lake-in-royalty-free-image-1578000553.jpg?crop=0.668xw:0.998xh;0.285xw,0.00244xh&resize=640:*'
        alt=""
      />
    )}
      
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map(ct=>(
            <span className="postCat">
            {ct.name}
          </span>
          ))}
          
        </div>
        <Link to={`/single/${post._id}`} className='link'>
        <span className="postTitle">
            {post?.title}
        </span>
        </Link>
        
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">
       {post.desc}
      </p>
    </div>
  );
}