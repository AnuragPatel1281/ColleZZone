import React, { useEffect, useState } from 'react'
import "../css/Feed.css"
import Post from './Post'
import CollezoneBox from './CollezoneBox'
import db from '../firebase'
function Feed() {

  const [posts,setPosts] = useState([])

  useEffect(() =>{
   
    db.collection('questions')
    .orderBy('timestamp',"desc")
    .onSnapshot((snapshot) =>
    setPosts(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        questions: doc.data(),
      }))
    )
  );
   
  },[])
  return (
    <div className="feed">
      <CollezoneBox />    
      {posts.map(({ id, questions }) => (
        <Post
          key={id}
          id={id}
          image = {questions.imageUrl}
          questions={questions.questions}
          timestamp={questions.timestamp}
          quoraUser={questions.user}
        />
      ))}
    </div>
  )
}

export default Feed
