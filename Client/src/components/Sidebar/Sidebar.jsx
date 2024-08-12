import React from 'react'
import "./Sidebar.css";
import {BiBookAlt, BiHelpCircle, BiHome, BiLogOut, BiMessage, BiSolidReport, BiStats, BiTask} from 'react-icons/bi';
import { logoutRequest } from "../../api/auth";
import { useNavigate } from "react-router-dom";



const Sidebar = () => {

  const navigate = useNavigate();

const handleLogout = async () => {
  try {
    const res = await logoutRequest();
    // console.log(res.message);
    if (res.success) {
      localStorage.removeItem('token');
      navigate("/login");
    }
  } catch (error) {
    console.error("Failed to logout user", error);
  }
};


  return (
    <div className='menu'>
      <div className="logo">
        <BiBookAlt className='logo-icon'/>
        <h2>Planti Dashboard</h2>
      </div>

      <div className='menu--list'>
        <a href="#" className="item active">
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
        <a href="#" className="item" 
        onClick={handleLogout}>
          <BiLogOut className='icon'
          />
          Logout
        </a>
      </div>
    </div>
  )
}

export default Sidebar