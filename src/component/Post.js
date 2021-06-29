import { Avatar } from '@material-ui/core'
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedICon from "@material-ui/icons/ArrowDownwardOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import {  MoreHorizOutlined, ShareOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import '../css/Post.css'
import Modal from 'react-modal'
function Post({id,question,image,timestamp,collezoneUser})
 {
   const[openModal,setOpenModal] = useState(false)

  return (
    <div className = "post">
      <div className = "post_info">
        <Avatar
          src ={collezoneUser.photo}
          
        />
        <h5>{collezoneUser.displayName ? collezoneUser.displayName : collezoneUser.email }</h5>
        <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
      </div>
        
      <div className ="post_body">
        <div className="post_question">
        <p>{question}</p>
          <button className ="post_btnAnswer">
            Answer
          </button>
             
          
        </div>
        <img src= {image} 
             alt=""/>
      </div>
      <div className ="post_footer">
          <div className="post_footerAction">

            <ArrowUpwardOutlinedIcon />
            <ArrowDownwardOutlinedICon />

          </div>
          
          <RepeatOutlinedIcon/>
          <ChatBubbleOutlineOutlinedIcon/>

          <div className="post_footerLeft">
            <ShareOutlined/>
            <MoreHorizOutlined/>
          </div>

      </div>
    </div>
  )
}

export default Post