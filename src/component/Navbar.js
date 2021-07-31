import React, { useState } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import NotificationOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import { Avatar, Button, Input } from '@material-ui/core';
import '../css/Navbar.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import  db, {auth} from "../firebase";
import { useEffect } from 'react';
import Modal from 'react-modal'
import LinkIcon from '@material-ui/icons/Link'
import { ExpandMore} from '@material-ui/icons';
import firebase from 'firebase';
import {getPosts} from "./util"
function Navbar({posts,setPosts}) 
{
  const [inputValue,setInputValue] = useState("")
  useEffect(() =>
  {
    auth.onAuthStateChanged((authUser)=>{
     
       if(authUser){
         
       } 
       else {
         
       }

    })

    
  } ,)
  const user = useSelector(selectUser)
  const [openModal,setOpenModal] = useState(false)
  const logouthandler =() =>  auth.signOut()
  const [input,setInput] = useState("")
  const [inputUrl, setInputUrl] = useState("")
  const searchHandler=(e)=>{
  e.preventDefault()
  if(inputValue==="")
  getPosts(setPosts)
  else
  setPosts(posts.filter((post)=>{
    return post.question.question.toLowerCase().includes(inputValue.toLowerCase())
  }))

  }
  const handleQuestion =(e) => {
    e.preventDefault()
    
    setOpenModal(false)
    
    db.collection('questions').add({
    question: input,
    imageUrl : inputUrl,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    user : user,
  })

    setInput("")
    setInputUrl("")
  }
  
  return (
    <div className = "qHeader">
       <div className = "qHeader_logo">
       <img
           src="logocollez.png"
           alt=""
      />
    </div>
    <div className = "qHeader_icons">
      <div className = "qHeader_icon">
          
      </div>
      <div className = "qHeader_icon">
          
      </div>
      <div className = "qHeader_icon">
        
      </div>
      <div className = "qHeader_icon">
         
      </div>
      <div  className = "qHeader_icon">
          
      </div>
      <div className = "qHeader_icon">
          
      </div>
    </div>
    <form onSubmit={searchHandler}>
    <div className="qHeader_input">
       <SearchIcon/> 
       <input type = "text" placeholder ="Search ColleZone" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
       <button type="submit">search</button>
     </div>
    </form>
 
     <div className = "qHeader_Rem">
       <div className = "qHeader_avatar">
         <Avatar onClick ={logouthandler}
         src ={user.photo}
         />
       </div>
       <LanguageIcon />
       <Button onClick ={() => setOpenModal(true)}>Add question</Button>
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
           <div className = "modal__title">
            <h5>Add Question</h5>
            <h5>Share Link</h5>
            </div>
            <div className = "modal__info" >
              <Avatar
                className ="avatar"
                src = {user.photo}
              />
              <p>{user.displayName ? user.displayName: user.email} asked </p>
              <div className ="modal__scope">
                <PeopleAltOutlinedIcon />
                <p>Public</p>
                <ExpandMore/>

              </div>
            </div>
          <div className= "modal__Field">
              <Input
                required
                value ={input}
                onChange={(e)=> setInput(e.target.value)}
                type ="text"
                placeholder ="Start your question with 'What','How','Why' etc."
              />

            
            <div className= "modal__fieldLink">
              <LinkIcon />
              <input
                 value ={inputUrl}
                 onChange={(e)=> setInputUrl(e.target.value)}
                 type ="text"
                placeholder ="Optional: include a link that gives context"
              ></input>

            </div>
           </div>
            <div className ="modal__buttons">
            <button className="cancle" onClick={() => setOpenModal(false)}>
              Cancel
            </button>
             <button  onClick = {handleQuestion} type ="submit" className="add">
              Add Question
            </button>
          </div> 
       </Modal>
     </div>
    </div>
  )
}

export default Navbar