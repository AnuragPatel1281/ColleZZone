import React from 'react'
import "../css/Feed.css"
import Post from './Post'
import CollezoneBox from './CollezoneBox'
function Feed() {
  return (
    <div className="feed">
            <CollezoneBox />    
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
    </div>
  )
}

export default Feed
