import React from 'react'
import  './information.scss'
const Information = () => {
  return (
    <div className='information'>
        <div className="top">
            <div className="topTitle">Information</div>
            <div className="topEdit"><span className='text'>Edit</span></div>
        </div>
        <div className="bottom">
          <img src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80' alt='' className="image"/>
          <div className="details">
            <div className="name"> John Snow</div>
            <div className="email"><span>Email:</span> johns@gmail.com</div>
            <div className="age"><span>Age:</span> 29</div>
            <div className="phone"><span>Phone No. :</span> 295677868</div>
          </div>
        </div>
    </div>
  )
}

export default Information