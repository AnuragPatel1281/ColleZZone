import React,{useState,useEffect} from 'react'
import '../css/Collezone.css'
import Navbar from './Navbar';
import Sidebar from "./Sidebar"
import Feed from './Feed';
import Widget from './Widget';
import db from '../firebase'
import {getPosts} from "./util"
function collezone() {
  const [posts,setPosts] = useState([])

  useEffect(() =>{
  getPosts(setPosts)
   
  },[])
  return (
    <div className="collezone">
      
      <Navbar posts={posts} setPosts={setPosts} />
      <div className="collezone_content">
        <Sidebar/>
        <Feed posts={posts} setPosts={setPosts} />
        <Widget />
      </div>

    </div>
  )
}

export default collezone;