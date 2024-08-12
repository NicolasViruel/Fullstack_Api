import React from 'react'
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

const Card = () => {
  return (
    <div className='card--container'>
    {courses.map((item, index) => (
        <div className='card' key={index}>
            <div className="card--cover">{item.icon}</div>
            <div className="card--title">
                <h2>{item.title}</h2>
            </div>
        </div>
    ))}
</div>
  )
}

export default Card