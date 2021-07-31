import React, { useEffect, useState } from 'react'
import "../css/Feed.css"
import Post from './Post'
import CollezoneBox from './CollezoneBox'
import db from '../firebase'
function Feed({posts}) {
  return (
    <div className="feed">
      <CollezoneBox />    
      {posts.map(({ id, question }) => (
        <Post
          key={id}
          id={id}
          image = {question.imageUrl}
          question={question.question}
          timestamp={question.timestamp}
          collezoneUser={question.user}
        />
      ))}
    </div>
  )
}

export default Feed