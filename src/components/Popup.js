import React from 'react'
import './Popup.css'
function Popup(props) {
  return (props.trigger)?(
    <div className='popup'>
      <div className="popup-inner">
        <h2>Update Your Profile</h2>
        <span  onClick={()=>{props.setTrigger(false)}} className="close-btn material-symbols-outlined">close</span>
        {props.children}
        <button className='save' onClick={props.saveChange}>Save</button>
      </div>
    </div>
  ):""
}

export default Popup
