import React from 'react'
import './write.scss'
import {GrAdd} from 'react-icons/gr'
import { Context } from './../../context/context';
import axios from 'axios';
import { useContext } from 'react';



export default function Write() {
  const {user,dispatch}=useContext(Context);
  const [title,setTitle]=React.useState('');
  const [desc,setDesc]=React.useState('');
  const [file,setFile]=React.useState(null);
  
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const newPost={
       username:user.username,
       title,
        desc
    }
    if(file){
      const data=new FormData();
      console.log("data1: ",data);
      const filename=Date.now()+file.name;
      console.log("filename: ",filename);
      data.append('name',filename);
      data.append('file',file);
      console.log("data2: ",data);
      newPost.photo=filename;
      console.log("newpost: ",newPost);
      try{
        await axios.post('/upload',data);
      }catch(err){
        console.log(err);
      }
    }
    try{
      const res=await axios.post('/posts',newPost);
      window.location.replace('/post/'+res.data._id);
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <div className='write'>
    {file && 
     <img
        className="writeImg"
        src= {URL.createObjectURL(file) || "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}
        alt=""
      />
    }
      <form className='writeform' onSubmit={handleSubmit}>
        <div className='writeform-group'>
        <label htmlFor='file-ip'><GrAdd className='write-icon'/></label>
          <input type='file' id='file-ip' className='writeinput' style={{display:'none'}} onChange={(e)=>setFile(e.target.files[0])}/>
          <input type='text' id='text-ip' placeholder='Title..' className='writeinput' autoFocus={true} onChange={e=>setTitle(e.target.value)}/>
        </div>
        <div className='writeform-group'>
          <textarea placeholder='Tell your Story...'
            type='text'
            className='writeinput writetext'
            onChange={e=>setDesc(e.target.value)}
          ></textarea>
        </div>
        <button type='submit' className='writesubmit'>Publish</button>
      </form>
    </div>
  )
}



// import "./write.css";
// import {GrAdd} from 'react-icons/gr'
// import { Context } from './../../context/context';

// export default function Write() {
//   return (
//     <div className="write">
//       <img
//         className="writeImg"
//         src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
//         alt=""
//       />
//       <form className="writeForm">
//         <div className="writeFormGroup">
//           <label htmlFor="fileInput">
//           <GrAdd className='write-icon'/>
//           </label>
//           <input id="fileInput" type="file" style={{ display: "none" }} />
//           <input
//             className="writeInput"
//             placeholder="Title"
//             type="text"
//             autoFocus={true}
//           />
//         </div>
//         <div className="writeFormGroup">
//           <textarea
//             className="writeInput writeText"
//             placeholder="Tell your story..."
//             type="text"
//             autoFocus={true}
//           />
//         </div>
//         <button className="writeSubmit" type="submit">
//           Publish
//         </button>
//       </form>
//     </div>
//   );
// }