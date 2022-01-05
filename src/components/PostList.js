import React,{useState,useEffect} from 'react';
import axios from 'axios';
import PostCard from './post_card'

function PostList(){
//   const {title,description} =props;
  const [posts,setData]=useState([])

  useEffect(()=>{
     console.log("Rendering component")
     axios.get("http://localhost:8080/posts")
      .then((response)=>{
          
     setData(response.data)
     
     //console.log(response.data)
     }).catch((error)=>{
         console.log(error)
        })
  })
//  // console.log(data)
    return(
      
      
      
       
               <div className="show_posts">

                {posts.map(post=>
                <PostCard
                    key={post._id}
                    id={post._id}
                    title={post.title}
                    content={post.content}
                    author={post.author}
                    
                    dateCreated={post.date}
                   
                />)}
                   {/* <h1>{post.title}</h1>
                   <p>{post.desc}<br></br><h3>{post.author}</h3></p> */}
               </div>
          
      
    )
}

export default PostList;