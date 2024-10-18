import React from 'react'
import CallToAction from '../../parts/CallToAction'
import CardList from '../../parts/CardList'
import Footer from '../../parts/Footer'
import Header from '../../parts/Header'
import AboutBanner from './AboutBanner'

const About = () => {
  const project =[
    {
        image: "https://via.placeholder.com/300x200",
        title: "qweLorem ipsum dolor sit amet.",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere quia vero, exercitationem voluptatum amet quidem.",
        

    },
    {
        image: "https://via.placeholder.com/300x200",
        title: "rrLorem ipsum dolor sit amet.",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere quia vero, exercitationem voluptatum amet quidem.",
        

    },
    {
        image: "https://via.placeholder.com/300x200",
        title: "ttLorem ipsum dolor sit amet.",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere quia vero, exercitationem voluptatum amet quidem.",
        

    },
    {
        image: "https://via.placeholder.com/300x200",
        title: "ggLorem ipsum dolor sit amet.",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere quia vero, exercitationem voluptatum amet quidem.",
        

    },
    {
        image: "https://via.placeholder.com/300x200",
        title: "ssLorem ipsum dolor sit amet.",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere quia vero, exercitationem voluptatum amet quidem.",
        

    },
    {
        image: "https://via.placeholder.com/300x200",
        title: "bbLorem ipsum dolor sit amet.",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere quia vero, exercitationem voluptatum amet quidem.",
        

    },
  ]
  
  return (
    <>
      <Header/>
      <AboutBanner/>
      <CardList data={project} header="My Recent Projects" subheader= ""/>
      <CallToAction/>
      <Footer/>

    </>
  )
}

export default About