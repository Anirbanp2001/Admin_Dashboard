import React from 'react'
import './widget.scss'
import KeyboardDoubleArrowUpOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowUpOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

const Widget = ({type}) => {
    let data;
    const diff=100;
    const amount=20;
    switch(type){
        case "user":
            data={
                title:"USERS",
                isMoney:false,
                link:"See all users",
                icon:<PersonOutlineIcon className="icon" style={{color:"red"}}/>
            }
            break;
        case "order":
            data={
                title:"ORDERS",
                isMoney:false,
                link:"View all Orders",
                icon:<ShoppingCartIcon className="icon" style={{color:"rgb(128, 128, 67)"}}/>
            }
            break;
        case "earning":
            data={
                title:"EARNINGS",
                isMoney:true,
                link:"See all earnings",
                icon:<PaidOutlinedIcon className="icon" style={{color:"green"}}/>
            }
            break;
        case "balance":
            data={
                title:"BALANCE",
                isMoney:true,
                link:"See net balance",
                icon:<AccountBalanceWalletOutlinedIcon className="icon" style={{color:"violet"}}/>
            }
            break;
    }
  return (
      <div className="widget">
          <div className="left">
              <span className="title">{data.title}</span>
              <span className="count">{data.isMoney&&"$"}{amount}</span>
              <span className="link">{data.link}</span>
          </div>
          <div className="right">
              <div className="percentage positive">
                  <KeyboardDoubleArrowUpOutlinedIcon className="icon"/>
                  {diff}%
              </div>
              {data.icon}

          </div>
      </div>
  )
}

export default Widget