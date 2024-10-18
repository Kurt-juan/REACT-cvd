import React from 'react'
import { Link } from 'react-router-dom'

const HomeAbout = () => {
  return (
    <div>
        <section className='py-24'>
        <div className="container">
            <div className="flex md:flex-row-reverse flex-col-reverse gap-10 items-center">
                <div className='basis-[50%] text-center md:text-start'>
                    <h3 className='text-accent'>About Me</h3>
                    <p className='max-w-[550px] mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, inventore ab enim voluptatibus, rerum officia in velit exercitationem, consequatur quae dolorem nemo. Officia fugiat obcaecati distinctio voluptatum similique at, id ipsum impedit quos laboriosam, assumenda nam, sit et amet porro!</p>
                    
                </div>
                <div className='basis-[50%] grid place-content-center'>  
                <img src="https://via.placeholder.com/550x550" alt="" className='size-[400px] rounded-full' />

                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default HomeAbout