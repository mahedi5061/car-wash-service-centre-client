import React from 'react'
import OnlineStore from '../OnlineStore/OnlineStore';
import './OnlineStores.css';
import Tire from '../../../images/Tier.jpg';
import Petrol from '../../../images/Petrol.jpg';
import  Desiel from '../../../images/Desel.jpg';
import Brake from '../../../images/Disk.jpg'

const OnlineStores = () => {
    const storeData = [
        {
            title : 'Tier Car Wheel',
            description : 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem ...     ',
            price :"237.99",
            img:Tire
        },
        {
            title : 'Aqualine Desiel Oil',
            description : 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem ...        ',
            price :"168.39",
            img:Petrol
        },
        {
            title : 'Car Brake System',
            description : 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem ....        ',
            price :"10.34",
            img:Brake
        },
        {
            title : 'Canister For Liquids 5l',
            description : 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem ....        ',
            price :"249.99",
            img:Desiel
        }
    ]
    return (
        <>
        <h5 className="d-flex justify-content-center store">ONLINE STORE</h5>
        <h2 className="d-flex justify-content-center serviceProvide">Popular Products</h2> 
           <div className="d-flex justify-content-around my-5 py-5">
            <div className="row"> 
            {
                storeData.map((store=><OnlineStore store={store}></OnlineStore>))
            }
            </div>
           </div> 
           </>
    );
};

export default OnlineStores;