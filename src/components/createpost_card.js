import React from 'react';
import './createpost_card.css';

function Post_create({title, content, author, heading, _onSubmit, _handleCloseModal, _handleValues}){
    return <div className='card write-card'>
        <div className='right-align card-head'>
            <span className='title'>{heading}</span>
            <button className='close button' onClick={_handleCloseModal}>&times;</button>
        </div>
        <hr></hr>
        <form onSubmit={_onSubmit} className='card-form'>
        
            <input className='text-field' type='text'  value={author} maxLength="30" onChange={({target:{value}})=>_handleValues('author', value)} required></input>
            

           
            <input name="title" className='text-field' type='text' value={title} placeholder="Title" maxLength="100" onChange={({target:{value}})=>_handleValues('title', value)} required></input>
            
            {/* <label htmlFor="content">Content</label> */}
            <textarea className='text-field'  placeholder="Write a post here..." name="content" rows="5" maxLength='500'value={content} onChange={({target:{value}})=>_handleValues('content', value)} required></textarea>
            <span className='right-align'><input className='button2' type='submit' value='Post'></input></span>
        </form>
    </div>
}

export default Post_create;