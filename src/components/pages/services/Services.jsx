import React from 'react'
import Header from '../../parts/Header'
import Footer from '../../parts/Footer'
import CallToAction from '../../parts/CallToAction'
import ServicesTwoCols from './ServicesTwoCols'

const Services = () => {
  return (
    <>
    <Header/>
    <ServicesTwoCols 
    title = "Web"
    price ="$200"
    image ="https://via.placeholder.com/400x400" 
    content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magni ut dolor qui ex quis incidunt tenetur! Suscipit, deserunt placeat?"
    isDark={false}
    />
    <ServicesTwoCols 
    title = "Web"
    price ="$200"
    image ="https://via.placeholder.com/400x400" 
    content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magni ut dolor qui ex quis incidunt tenetur! Suscipit, deserunt placeat?"
    isDark={true}
    />
    <ServicesTwoCols 
    title = "Web"
    price ="$200"
    image ="https://via.placeholder.com/400x400" 
    content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magni ut dolor qui ex quis incidunt tenetur! Suscipit, deserunt placeat?"
    isDark={false}
    />
   

    <CallToAction/>
    <Footer/>


    </>
  )
}

export default Services