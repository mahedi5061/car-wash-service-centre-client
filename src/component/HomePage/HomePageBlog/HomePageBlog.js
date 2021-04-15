import React from 'react';
import wilson from '../../../images/wilson.png';
import aliza from '../../../images/aliza.png';
import HomePageBlogPost from '../HomePageBlogPost/HomePageBlogPost';
import './HomePageBlog.css'

const HomePageBlog = () => {
    const blogData = [
        {
            title : 'Check at least a doctor in a year for your teeth',
            description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            author:'Rashed Kabir',
            authorImg : wilson,
            date : '23 April 2019',
            backgroundColor:'#1CC7C1',
            color:'#FFFFFF'
        },
        {
            title : '2 time brush in a day can keep you healthy',
            description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            author:'Dr. Sinthia',
            authorImg : wilson,
            date : '23 April 2019'
        },
        {
            title : 'The tooth cancer is taking a challenge',
            description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            author:'Dr. Cudi',
            authorImg :aliza,
            date : '23 April 2019'
        },
    ]
    return (
        <section className="blogs my-5">
           <div className="container">
               <div className="section-header text-center">
                    <h5 className="text-style text-uppercase">Our Blog</h5>
                    <h1 className="ourBlog">From Our Blog News</h1>
               </div>
               <div className="card-deck mt-5">
                    {
                        blogData.map(blog => <HomePageBlogPost blog={blog} key={blog.title}/>)
                    }
               </div>
           </div>
       </section>
    );
};

export default HomePageBlog;