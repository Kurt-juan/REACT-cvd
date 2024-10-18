import React from 'react'
import { Link } from 'react-router-dom'

const CallToAction = () => {
  return (
   
      <section className='bg-accent py-24 text-black'>
        <div className='max-w-[750px] w-full mx-auto text-center'>
        <h3>Feel Free to Talk about your projects</h3>
        <p className='mb-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi soluta aliquam voluptatum possimus ut? Voluptates facere, quidem rerum ipsum totam quas velit! Debitis iste, delectus alias praesentium ipsam doloribus perspiciatis!</p>
        <Link to ="/contact" className='btn btn-dark'>Contact US</Link>
        </div>
      </section>
   
    
    
  )
}

export default CallToAction