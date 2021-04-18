import React, { useEffect, useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
 
 
const Review = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        console.log(info);
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('company', info.company);
        formData.append('description', info.description);
        

        //Image upload in Backend side system.

        fetch('https://shrouded-lake-27228.herokuapp.com/addReviews', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="container-fluid row" >
        <div style={{width:"600px"}}>
        <Sidebar></Sidebar>
        </div>
        <div className="col-md-7 p-4 pr-5" style={{ position: "absolute", right: 100, backgroundColor: "#F4FDFB" }}>
            <h5 className="text-brand">Review</h5>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Name</label>
                    <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Company Name</label>
                    <input onBlur={handleBlur} type="text" className="form-control" name="company" placeholder="Company Name" />
                </div>
 

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Description</label>
                    <textarea onBlur={handleBlur} type="text" className="form-control" cols="20" rows="5" name="description" placeholder="description" />
                </div>
               
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Upload a image</label>
                    <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
    );
};

export default Review;