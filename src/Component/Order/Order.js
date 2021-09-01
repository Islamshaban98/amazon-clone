// /* eslint-disable array-callback-return */
// import React from 'react';
// import "./Order.css";
// import moment from 'moment';
// import CurrencyFormat from 'react-currency-format';
// import { useStateValue } from '../../Context';
// import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
// function Order({order}) {
//     const {state, dispatch} =useStateValue();
//     const getBasketTotal = (basket) =>
//     state.basket?.reduce((amount, item) => item.price + amount, 0);
//     return (
//         <div className="order">
//             <h2>Order</h2>
//             <p>{moment.unix(order.data?.created) }</p>
//             <p className="order__id">
//               {/* <small>{order?.id}</small>   */}
//             </p>
//             {
//                order.data.basket?.map(item => {

//                    <CheckoutProduct
//                    id={item.id}
//                    title={item.title}
//                    img={item.img}
//                    rating={item.rating}
//                    price={item.price}
//                  />
//                }
//                )
//            }
//             <CurrencyFormat
//                   renderText={(value) => (
//                     <>
//                       <p>
//                         {`Subtotal ( ${state.basket?.length} items)`} :
//                         <strong>{value}</strong>
//                       </p>
//                       <small className="subtotal__gift">
//                         <input type="checkbox" /> This order contains a gift
//                       </small>
//                     </>
//                   )}
//                   decimalScale={2}
//                   value={getBasketTotal(state.basket)}
//                   displayType={"text"}
//                   thousandSeparator={true}
//                   prefix={"$"}
//                 />
//         </div>
//     )
// }

// export default Order
