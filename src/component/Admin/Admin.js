import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const Admin = () => {
    const [info, setInfo] = useState({});
    
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    console.log(info)
     

    const handleSubmit = () => {
        const formData = new FormData()
       
        formData.append('email', info.email);
     

        fetch('https://shrouded-lake-27228.herokuapp.com/addAdmin', {
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
        <section className="container-fluid row">
        <div className="col-md-5">
        <Sidebar></Sidebar>
        </div>
        <div className="col-md-7 mt-5 p-4 pr-3" style={{ position: "absolute", right: 200, backgroundColor: "#F4FDFB" }}>
            <h5 className="text-brand">Make Admin</h5>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Email</label>
                    <input onBlur={handleBlur} type="text" className="form-control" name="email" placeholder="Enter Admin Email" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </section>
    );
};

export default Admin;