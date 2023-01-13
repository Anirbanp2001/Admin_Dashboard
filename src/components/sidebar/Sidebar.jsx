import React from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to="/" style={{ textDecoration :"none"   }}>
      <div className="top"><span className='logo'>Logo</span></div>
      </Link>
      <hr/>
      <div className="center">
          <ul className='list'>
            <p className="title">MAIN</p>
              <li>
                  <DashboardIcon className='icon'/>
                  <span>Dashboard</span>
                </li>
              <Link to="/users" style={{ textDecoration :"none"   }}>
              <li>
              <PersonOutlineIcon className='icon'/>
                <span>Users</span>
              </li>
              </Link>
              <Link to="/products/12345" style={{ textDecoration :"none"   }}>
              <li>
                <CategoryIcon className='icon'/>
                <span>Products</span>
              </li>
              </Link>
              <li>
                <ShoppingCartIcon className='icon'/>
                <span>Orders</span>
              </li>
              <li>
                <DirectionsBikeIcon className='icon'/>
                <span>Delivery</span>
              </li>
              <p className="title">USEFUL</p>
              <li>
                <QueryStatsIcon className='icon'/>
                <span>Stats</span></li>
              <li>
                <NotificationsActiveIcon className='icon'/>
                <span>Notification</span>
              </li>
              <p className="title">SERVICE</p>
              <li>
                <MonitorHeartIcon className='icon'/>
                <span>System Health</span>
              </li>
              <li>
                <AppRegistrationIcon className='icon'/>
                <span>Logs</span>
              </li>
              <li>
                <SettingsIcon className='icon'/>
                <span>Settings</span>
              </li>
              <p className="title">USER</p>
              <li>
                <AccountCircleIcon className='icon'/>
                <span>Profile</span>
              </li>
              <li>
                <LogoutIcon className='icon'/>
                <span>Logout</span>
              </li>
          </ul>
      </div>
      
     
     
    </div>
  )
}

export default Sidebar
