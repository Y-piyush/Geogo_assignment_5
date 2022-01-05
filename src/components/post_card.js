import React from "react";
 import "./post_card.css";
// import { VscEdit, VscTrash } from "react-icons/vsc"

function formatDate(dt) {
  var date = new Date(dt);
  var hours = date.getHours()
  var minutes = date.getMinutes()
  var currentDate = date.getDate()
  var month = date.getMonth()
  var mer = "AM"
  if (hours>=12) mer = "PM"
  hours%=12
  if (hours===0) hours = 12
  if (minutes < 10) minutes = "0" + minutes
  if (currentDate < 10) currentDate = "0" + currentDate
  if (month < 10) month = "0" + month
  return `${hours}:${minutes} ${mer}, ${currentDate}-${month}-${date.getFullYear()}`
}

function PostCard({id, title, content, author, dateCreated}){
    return (
    <div className="post card">
    <div>
      <div className="post-info">
      <div>
          <div className="post-authorName">{author}</div>
          <div className="post-dateCreated">{formatDate(dateCreated)}</div>
          <br></br>
      </div>
     
      </div>
    </div>
    <div>
      <h4 className="post-title">{title}</h4>
      <p className="post-content">{content}</p>
      {/* <p className="post-desc">{desc}</p> */}
    </div>
    <hr></hr>
    <div className="special_f">
        <div>
           <button><span><i className="far fa-thumbs-up"></i>Like</span></button>
        </div>
        <div>
        <button><span><i className="far fa-comment-alt"></i>Comment</span></button>
        </div>
        <div>
          <button><span><i className="fas fa-share-alt"></i>Share</span></button>
        </div>
        <div>
               <button><span><i className="far fa-paper-plane"></i>Send</span></button>
        </div>
        
    </div>
  </div>
  )
}

export default PostCard;