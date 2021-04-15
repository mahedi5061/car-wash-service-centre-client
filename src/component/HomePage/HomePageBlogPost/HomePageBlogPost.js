import React from 'react';

const HomePageBlogPost = (props) => {
    const {title, description, author, authorImg , date,backgroundColor,color} = props.blog;
    return (
        <div className="card shadow-sm" style={{ backgroundColor:backgroundColor,color:color}}>
        <div className=" d-flex  align-items-center">
            <img className="mx-3" src={authorImg} alt="" width="60"/>
            <div>
                <h6 style={{color:color}}>{author}</h6>
                <p className="m-0" style={{color:color}}>{date}</p>
            </div>
        </div>
        <div className="card-body">
            <h5 style={{color:color}}>{title}</h5>
            <p className="card-text mt-4" style={{color:color}}>{description}</p>
        </div>
        
   </div>
    );
};

export default HomePageBlogPost;