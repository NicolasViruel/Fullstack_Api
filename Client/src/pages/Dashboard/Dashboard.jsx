import React from 'react';
import "./Dashboard.css";
import Sidebar from '../../components/Sidebar/Sidebar';
import Content from '../../components/Content/Content';
import Profile from '../../components/Profile/Profile';

const Dashboard = () => {
  return (
    <div>
      <div className='dashboard'>
      <Sidebar/>
      <div className='dasboard--content'>
        <Content/>
        <Profile/>
      </div>
      </div>
    </div>
  )
}

export default Dashboard