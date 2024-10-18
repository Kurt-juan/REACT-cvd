import React from 'react'
import Header from '../../parts/Header'
import CallToAction from '../../parts/CallToAction'
import Footer from '../../parts/Footer'
import HomeBanner from './HomeBanner'
import HomeServices from './HomeServices'
import HomeAbout from './HomeAbout'
import CardList from '../../parts/CardList'
import { Globe, Mail, Pencil } from 'lucide-react'


const Home = () => {

    const services =[
        {
        icon: <Globe stroke={"#ffa700"} size={50} className='mx-auto mb-5'/>,
        title: 'Web Design & Development',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae adipisci tempore et a harum architecto, consequatur provident ipsum similique quidem.',
    },
        {
        icon: <Pencil stroke={"#ffa700"} size={50} className='mx-auto mb-5'/>,
        title: 'Graphics and Vector Design',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae adipisci tempore et a harum architecto, consequatur provident ipsum similique quidem.',
    },
        {
        icon: <Mail stroke={"#ffa700"} size={50} className='mx-auto mb-5'/>,
        title: 'Social Media Specialist',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae adipisci tempore et a harum architecto, consequatur provident ipsum similique quidem.',
    },
]

const trends =[
    {
        image: "https://via.placeholder.com/300x200",
        title: "Lorem ipsum dolor sit amet.",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere quia vero, exercitationem voluptatum amet quidem.",
        url: "/xxx",

    },
    {
        image: "https://via.placeholder.com/300x200",
        title: "XXLorem ipsum dolor sit amet.",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere quia vero, exercitationem voluptatum amet quidem.",
        url: "/xxx",

    },
    {
        image:"https://via.placeholder.com/300x200",
        title: "XXXLorem ipsum dolor sit amet.",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere quia vero, exercitationem voluptatum amet quidem.,",
        url: "/xxx",

    },
]

  return (
    <>
    <Header/>
    <HomeBanner/>
    <HomeServices services={services}/>
    <HomeAbout/>
    <CardList data= {trends} header="Latest Trends" subheader="Latest Happenings in Virtual Space"/> 
    <CallToAction/>
    <Footer/>
    </>
  )
}

export default Home