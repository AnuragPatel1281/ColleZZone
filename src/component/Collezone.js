import React from 'react'
import '../css/Collezone.css'
import Navbar from './Navbar';
import Sidebar from "./Sidebar"
import Feed from './Feed';
import Widget from './Widget';
function collezone() {
  return (
    <div className="collezone">
      
      <Navbar />
      <div className="collezone_content">
        <Sidebar/>
        <Feed />
        <Widget />
      </div>

    </div>
  )
}

export default collezone;
