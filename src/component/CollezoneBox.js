import React from 'react'
import "../css/CollezoneBox.css"
import { Avatar } from "@material-ui/core"
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
function CollezoneBox() {
  const user = useSelector(selectUser)
  return (
    <div className="collezoneBox">
       <div className="collezoneBox_info">
       <Avatar
         src ={user.photo}
       />
        <h5>{user.displayName}</h5>
       </div>
       <div className="collezoneBox_collezone">
        <p>What is your question or link?</p>
      </div>
    </div>
  )
}

export default CollezoneBox
