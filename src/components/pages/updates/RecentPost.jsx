import React from 'react'
import { Link } from 'react-router-dom'

const RecentPost = ({img, title, date, path}) => {
  return (
    <div>
        <Link to ={path} className="flex gap-5 hover:text-black border border-transparent hover:border hover:border-accent 
        hover:bg-accent hover:bg-opacity-5 mb-5 ">
          <img src={img} alt="" />
          <div className=' flex flex-col justify-between'>
            <h6>{title}</h6>
            <p className='mb-0'>{date}</p>
          </div>
        </Link>
    </div>
  )
}

export default RecentPost
