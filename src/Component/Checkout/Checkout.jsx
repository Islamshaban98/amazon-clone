import React from 'react'
import { useStateValue } from '../../Context'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import Subtotal from '../Subtotal/Subtotal'
import "./Checkout.css"
function Checkout() {
    const{ basket ,user} = useStateValue().state;
    console.log(basket)
    return (
        <div className="checkout">
           <div className="checkout__left">
              <img 
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                alt=""
                className="checkout__ad" /> 
            <div>
                <h3>Hello, {user?.email}</h3>
                <h2 className="checkout__title">
                    Shopping Basket
                </h2>
                { basket.map(item =>(
                   <CheckoutProduct
                   id={item.id} 
                   title={item.title}
                   img={item.img}
                   rating={item.rating}
                   price={item.price}

                   />
                   )
               )}

            </div>
            </div> 
            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
