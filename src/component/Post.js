import { Avatar } from '@material-ui/core'
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedICon from "@material-ui/icons/ArrowDownwardOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import {  MoreHorizOutlined, ShareOutlined } from '@material-ui/icons'
import React from 'react'
import '../css/Post.css'

function Post() {
  return (
    <div className = "post">
      <div className = "post_info">
        <Avatar />
        <h5>Username</h5>
        <small>Timestamp</small>
      </div>
        
      <div className ="post_body">
        <div className="post_question">
          <p>Question</p>
          <button className ="post_btnAnswer">
            Answer
          </button>
        </div>
        <img src= "https://economictimes.indiatimes.com/thumb/msid-62211697,width-1600,height-900,resizemode-4/tech/ites/mega-deal-for-tcs-cracks-record-2-25-billion-nielsen-outsourcing-contract.jpg"
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