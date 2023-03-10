import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="search"> 
               <input type='text' placeholder='Search Here....'/>
               <SearchIcon/>
            </div>
            < div className="items">
                <div className="item">
                    <LanguageIcon className='icon'/>
                    <span>English</span>
                </div>
                <div className="item">
                    <DarkModeOutlinedIcon className='icon'/>
                </div>
                <div className="item">
                    <FullscreenExitOutlinedIcon className='icon'/>
                </div>
                <div className="item">
                    <NotificationsNoneOutlinedIcon className='icon'/>
                    <div className="counter">1</div>

                </div>
                <div className="item">
                    <ChatBubbleOutlineOutlinedIcon className='icon'/>
                    <div className="counter">1</div>
                </div>
                <div className="item">
                    <FormatListBulletedOutlinedIcon className='icon'/>
                </div>
                <div className="item">
                    <img src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80' alt='' className='avatar' />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Navbar