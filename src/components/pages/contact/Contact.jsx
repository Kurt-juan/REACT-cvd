import React from 'react'
import Header from '../../parts/Header'
import Footer from '../../parts/Footer'
import { Mail, MapPin, Phone } from 'lucide-react'

const Contact = () => {
  return (
    <>
    <Header/>
    <section className='py-24 bg-black text-white'>
      <div className="container">
        <h1 className='text-accent'>Contact</h1>
        <div className="grid gap-10 lg:grid-cols-2">
        <div className="info">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quisquam quae officiis quaerat delectus, dolorum ipsa neque quod architecto tempore.</p>
          <ul className='space-y-5'>
            <li className='flex gap-5 '><Phone stroke={"#ffa700"}/>0922-1234-456</li>
            <li className='flex gap-5 '><Mail stroke={"#ffa700"}/>someone@somewhere.com</li>
            <li className='flex gap-5 '><MapPin stroke={"#ffa700"} size={30} />Baloc Road, Brgy. San Ignacio San Pablo City, Laguna 4000</li>
          </ul>
        </div>
        <div className="form">
        <form action=""className='space-y-5'>
          <label htmlFor="name" className='block'>
            <input type="text" name='name' className='text-black w-full p-2 placeholder:opacity-100 outline-none border-2 border-transparent focus:border-accent' placeholder='Fullname'/>
            </label>
          <label htmlFor="email" className='block'>
            <input type="email" name='email' className='text-black w-full p-2 placeholder:opacity-100 outline-none border-2 border-transparent focus:border-accent' placeholder='Email'/>
          </label>
          <label htmlFor="message" className='block'>
            <textarea type="message" name='message' className='text-black w-full p-2 placeholder:opacity-100 outline-none border-2 border-transparent focus:border-accent !h-[200px]' placeholder='Message'/>
          </label>

          <button className='btn btn-accent w-[120px] '> Submit</button>
        </form>
        </div>
      </div>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default Contact
