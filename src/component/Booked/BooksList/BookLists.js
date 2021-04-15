// import React, { useContext, useEffect, useState } from 'react';
// import { userContext } from '../../../App';
 
// // import UserOrder from '../UserOrder/UserOrder';

// const BookLists = () => {
//     const [orderProduct,setOrderProduct]=useState([])
//     const [login, setLogin] = useContext(userContext);

//     //loaded user orders information matching by email.

//     useEffect(() => {
//         fetch('http://localhost:8000/?email='+login.email)
//         .then(res=>res.json())
//         .then(data=>setOrderProduct(data))
//     },[])
     
//     return (
//         <div>
//             <h2 className="ship-form">Your Order is {orderProduct.length}</h2> 
//             {
//                 orderProduct.map(pd=><UserOrder pd={pd} key={pd._id}></UserOrder>)
//             }
            
//         </div>
//     );
// };

// export default BookLists;