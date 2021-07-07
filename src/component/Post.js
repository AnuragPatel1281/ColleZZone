import { Avatar } from '@material-ui/core'
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedICon from "@material-ui/icons/ArrowDownwardOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import {  MoreHorizOutlined, ShareOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import '../css/Post.css'
import "../css/Navbar.css";
import Modal from 'react-modal'
Modal.setAppElement("#root");

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
        <button onClick = {() => setOpenModal(true)}
          className ="post_btnAnswer">
            Answer
          </button>

        <Modal
         isOpen = {openModal}
         onRequestClose = {() => setOpenModal(false)}
         shouldCloseOnOverlayClick={false}
         style ={{
           overlay:
           {
           width:700,
           height:600,
           backgroundColor : "rgba(0,0,0,0.8)",
           zIndex :"1000",
           top: "50%",
           left: "50%",
           marginTop: "-300px",
           marginLeft: "-350px",
           },
         }}
        >
           <div className = "modal__question">
            <h1>question</h1>
             <p>asked by <span className ="name">username</span>
             </p>
            </div>
            <div className = "modal__answer" >
             <textarea placeholder="Enter your answer"
             type="text"/>
            </div>
          
            <div className ="modal__button">
            <button className="cancle" onClick={() => setOpenModal(false)}>
              Cancel
            </button>
             <button  type ="submit" className="add">
              Add Answer
            </button>
          </div> 
          </Modal> 
          
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