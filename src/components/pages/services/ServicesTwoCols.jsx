import React from 'react'

const ServicesTwoCols = ({price,title, image,content, isDark}) => {
   
  return (
    <div>
        <section className={`py-24 ${isDark ? "bg-black text-white": ""}`} >
            <div className="container">
                <div className={`flex ${isDark ? "md:flex-row-reverse flex-col-reverse" : ""} items-center gap-10 `}>
                    <div className='content basis-[55%]'>
                        <h1 className='text-accent'>{title}</h1>
                        <p>{content}</p>
                       

                        <div>
                            <h5 className='mb-0'>Price Starts at </h5>
                            <h4 className='mb-0 text-accent'>{price}</h4>
                            <small>Price may vary Depeneding on the Design and Development</small>
                        </div>
                    </div>
                    <div className='img basis-[45%]  grid  place-content-center'>
                    <img src={`${image}`} alt="" className='size-[300px] rounded-full object-cover' />
                </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ServicesTwoCols