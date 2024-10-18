import React from 'react'

const Categoryitem = ({title, count}) => {
  return (
    <div>
        
        <div className='flex justify-between items-end py-2 mb-2 '>
              <h6>{title}</h6>
              <p className='mb-0'>({count})</p>
            </div>
    </div>
  )
}

export default Categoryitem