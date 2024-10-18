import React from 'react'
import { Link } from 'react-router-dom'

const CardList = ({data, header, subheader}) => {

    
  return (
  <section className='py-24 bg-black text-white'>
    <div className="container">
        <h2 className='mb-4 text-accent'>{header}</h2>
        <h4>{subheader}</h4>
        <div className="grid md:grid-cols-3 grid-row gap-5 mt-16">
            {data.map((item, key)=>{
                return(
                    <div className="card bg-white text-black rounded-2xl">
                    <div className="card-img rounded-2xl overflow-hidden">
                    <img src={`${item.image}`} alt="" className='w-full h-[200px] object-cover' />
                    </div>
                    <div className="card-content p-6">
                        <h4 className='text-accent'>Designing for A Cause</h4>
                        <p>{item.body}</p>
                        {item.url !== undefined && <Link to={`/${item.url}`}>Read More...</Link>}
                       
                    </div>
                </div>
                )
            })}
           
        </div>
    </div>
  </section>
  )
}

export default CardList