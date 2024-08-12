import React from 'react';
import ProfileHeader from './ProfileHeader';
import './Profile.css';
import userImage from '../../assets/user.png';
import { FaPlantWilt } from "react-icons/fa6";
import { RiPlantFill } from "react-icons/ri";
import { GiPlantWatering } from "react-icons/gi";


const courses = [
    {
        title: 'Watered Plants',
        icon: <GiPlantWatering />
    },
    {
        title: 'Newborn Plant',
        duration: '2 Hours',
        icon: <RiPlantFill />
    },
    {
        title: 'Nutrition Plants',
        duration: '2 Hours',
        icon: <FaPlantWilt />
    }
];


const Profile = () => {
  return (
    <div className='profile'>
        <ProfileHeader/>

        <div className="user--profile">
            <div className="user--detail">
                <img src={userImage} alt="" />
                <h3 className='username'>Nicolas Viruel</h3>
                <span className="profession">Teacher</span>
            </div>

            {/* <div className="user-courses">
                {courses.map((coures) =>(
                    <div className='course'>
                        <div className="course--detail">
                            <div className="course--cover">{coures.icon} </div>
                            <div className="course--name">
                                <h5 className='title'>{coures.title} </h5>
                                <span className="duration">{coures.duration}</span>
                            </div>
                        </div>
                        <div className='action'>:</div>
                    </div>
                ))}
            </div> */}
        </div>
    </div>
  )
}

export default Profile