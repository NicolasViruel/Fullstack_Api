import React from 'react'
import "./Sidebar.css";
import {BiBookAlt, BiHelpCircle, BiHome, BiMessage, BiSolidReport, BiStats, BiTask} from 'react-icons/bi';

const Sidebar = () => {
  return (
    <div className='menu'>
      <div className="logo">
        <BiBookAlt className='logo-icon'/>
        <h2>Planti Dashboard</h2>
      </div>

      <div className='menu--list'>
        <a href="#" className="item">
          <BiHome className='icon'/>
          Dashboard
        </a>
        <a href="#" className="item">
          <BiTask className='icon'/>
          Assement
        </a>
        <a href="#" className="item">
          <BiStats className='icon'/>
          Report
        </a>
        <a href="#" className="item">
          <BiMessage className='icon'/>
          Dashboard
        </a>
        <a href="#" className="item">
          <BiSolidReport className='icon'/>
          Dashboard
        </a>
        <a href="#" className="item">
          <BiHelpCircle className='icon'/>
          Help
        </a>
      </div>
    </div>
  )
}

export default Sidebar