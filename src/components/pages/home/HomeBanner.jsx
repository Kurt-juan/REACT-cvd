import { ArrowBigDown, ArrowDown, ChevronDown } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const HomeBanner = () => {
  return (
    <div>
         <section className='py-24'>
        <div className="container">
            <div className="flex flex-col-reverse md:flex-row gap-10 items-center">
                <div className='basis-[45%] text-center md:text-start'>
                    <h1 className='text-[40px] font-medium mb-[120px]'>Hello, Im Kurt Lui Juan Balanial.</h1>
                    <div>
                    <ArrowDown  size={50}/>  
                    </div>
                </div>
        
                <div className='basis-[55%] grid place-content-center'>  
                  <h4 className='text-[25px] font-light mb-[180px]' >A senior-year design student  who trying to specialize in 3D modeling & texturing.</h4>
                </div>

            </div>
        </div>
    </section>
    </div>
  )
}

export default HomeBanner