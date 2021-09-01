// /* eslint-disable array-callback-return */
// import React, { useEffect, useState } from 'react'
// import CurrencyFormat from 'react-currency-format';
// import { useStateValue } from '../../Context';
// import { dp } from '../../firebase';
// import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
// import Order from '../Order/Order';
// import "./Orders.css"

// function Orders() {
//     const {state, dispatch} =useStateValue();
//     const [orders, setOrders] = useState([]);
  
//     useEffect(() => {
//         if(state.user){

//             dp
//             .collection('users')
//             .doc(state.user?.uid)
//             .collection('orders')
//             .orderBy('created','desc')
//             .onSnapshot(snapshot=>{
//                 setOrders(snapshot.docs.map(
//                     doc =>({
//                         id:doc.id,
//                         data:doc.data()
//                     })
//                 ))
//             })
//         }else{
//             setOrders([])
//         }
       
//     }, [])
//     return (
//         <div className="orders">
//             <h1>Your orders</h1>
//             <div className="order__container">
          
//         <Order order={orders}/>
            
//             </div>
//         </div>
//     )
// }

// export default Orders
