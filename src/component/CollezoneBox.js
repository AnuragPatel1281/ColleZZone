import React from 'react'
import "../css/CollezoneBox.css"
import { Avatar } from "@material-ui/core"
function CollezoneBox() {
  return (
    <div className="collezoneBox">
       <div className="collezoneBox_info">
       <Avatar/>
        <h5>Username</h5>
       </div>
       <div className="collezoneBox_collezone">
        <p>What is your question or link?</p>
      </div>
    </div>
  )
}

export default CollezoneBox
