import React from 'react'
import "./featured.scss"
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import KeyboardDoubleArrowUpOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowUpOutlined';

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertOutlinedIcon/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={3}/>
        </div>
        <div className="title">Total Sales made today</div>
        <div className="amount">$450</div>
        <div className="desc">Previous Transactions loading.Last payments may not be included</div>

        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
            <KeyboardDoubleArrowUpOutlinedIcon className="icon"/>
            <div className="resultAmount">$12</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
            <KeyboardDoubleArrowUpOutlinedIcon className="icon"/>
            <div className="resultAmount">$12</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
            <KeyboardDoubleArrowUpOutlinedIcon className="icon"/>
            <div className="resultAmount">$12</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured