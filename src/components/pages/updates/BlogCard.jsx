import { Calendar, Tag, User } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({img, user, date, tag, title, info , path }) => {
  return (
    <>
        <div className="blog-card">
        <img src={img} alt="" className='w-full h-[450px] object-cover my-4 ' />
      
        <ul className='flex flex-wrap justify-between items-center'>
          <li className='flex justify-center gap-2'><User size={14}/> {user} </li>
          <li className='flex justify-center gap-2'><Calendar size={14}/> {date} </li>
          <li className='flex justify-center gap-2'><Tag size={14}/> {tag} </li>
        
        </ul>
        <h3 className='text-accent'>{title}</h3>
        <p>{info}</p>
        <Link to= "/" className = "text-accent">{path}</Link>
        </div>
    </>
  )
}

export default BlogCard