import React from 'react'
import Header from '../../parts/Header'
import CallToAction from '../../parts/CallToAction'
import Footer from '../../parts/Footer'
import Categoryitem from './Categoryitem'
import { Link } from 'react-router-dom'
import RecentPost from './RecentPost'
import TagLink from './TagLink'
import { Calendar, Tag, User } from 'lucide-react'
import BlogCard from './BlogCard'

const Updates = ({}) => {
  return (
    <div>
      <Header/>
   <section className='py-24'>
    <div className="container">
      <h1 className='mb-0 text-accent'>Latest Trends</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, est.</p>

      <div className="grid md:grid-cols-[2.5fr,_1fr] gap-10 mt-10">
        <main>
    
       <BlogCard
       img ="https://via.placeholder.com/200x200"
       user= "Roy Baaldia"
       date = " March 23, 2024"
       tag= "Web design"
       title= "This is Web Design"
       info = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsam quos rerum deserunt numquam, facilis dolorem labore illum atque aperiam!"
       path = "Read more.."
       />

       <BlogCard
       img ="https://via.placeholder.com/200x200"
       user= "Roy Baaldia"
       date = " March 23, 2024"
       tag= "Web design"
       title= "lorem4"
       info = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsam quos rerum deserunt numquam, facilis dolorem labore illum atque aperiam!"
       path = "Read more.."
       />




        </main>



        <aside>xxx
        <div className="aside-box mb-10">
            <h3 className='text-accent uppercase'>Categories</h3>

           <Categoryitem title="Web Design" count="2" />
           <Categoryitem title="Web Development" count="5" />
           <Categoryitem title="Wire frame" count="3" />
           <Categoryitem title="Vector & Logo" count="1" />
           <Categoryitem title="Social Media" count="2" />
        </div>

        <div className="aside-box mb-10">
        <h4 className='text-accent uppercase'>Recent Post</h4>
        
      <RecentPost img = "https://via.placeholder.com/100x100" title ="this is awesome!" path="/this-is-awesome" date= "March 5,2024" />
      <RecentPost img = "https://via.placeholder.com/100x100" title ="this is awesome!" path="/this-is-awesome" date= "March 6,2024" />
      <RecentPost img = "https://via.placeholder.com/100x100" title ="this is awesome!" path="/this-is-awesome" date= "March 7, 2024" />
      <RecentPost img = "https://via.placeholder.com/100x100" title ="this is awesome!" path="/this-is-awesome" date= "March 4,2024" />

        
        <div className="aside-box mb-10">
        <h4 className='text-accent uppercase'>Tags</h4>
        <TagLink title="Web Development" path="/web-development"/>
        <TagLink title="Web Design" path="/web-design"/>
        <TagLink title="Vector & Logo" path="/vector-logo"/>
        <TagLink title="seo" path="/seo"/>  

        </div>
        </div>
        </aside>

      </div>
    </div>
    </section>
      <CallToAction/>
      <Footer/>
    </div>
  )
}

export default Updates