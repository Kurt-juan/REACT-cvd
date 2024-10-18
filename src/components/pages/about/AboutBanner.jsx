import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Mail, Twitter, Youtube } from 'lucide-react'

const AboutBanner = () => {
  return (
    <div>
        <section className='py-24'>
        <div className="container">
            <div className="flex flex-col-reverse md:flex-row gap-10 items-center">
                <div className='basis-[50%]'>
                    <p className='mb-0 font-bold'>Things you need to know about</p>
                    <h3 className='text-accent'>About Me</h3>
                    <p className='max-w-[550px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, inventore ab enim voluptatibus, rerum officia in velit exercitationem, consequatur quae dolorem nemo. Officia fugiat obcaecati distinctio voluptatum similique at, id ipsum impedit quos laboriosam, assumenda nam, sit et amet porro!</p>

                    <p className='max-w-[550px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, inventore ab enim voluptatibus, rerum officia in velit exercitationem, consequatur quae dolorem nemo. Officia fugiat obcaecati distinctio voluptatum similique at, id ipsum impedit quos laboriosam, assumenda nam, sit et amet porro!</p>
                    
                    <ul className='flex gap-10'>
                    <li><Link to=""><Facebook stroke={"#ffa700"}/></Link></li>
                    <li><Link to=""><Twitter  stroke={"#ffa700"}/></Link></li>
                    <li><Link to=""><Instagram  stroke={"#ffa700"}/></Link></li>
                    <li><Link to=""><Youtube  stroke={"#ffa700"}/></Link></li>
                    <li><Link to=""><Mail stroke={"#ffa700"} /></Link></li>
                </ul>


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

export default AboutBanner