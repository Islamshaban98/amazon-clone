import React from 'react'
import { useStateValue } from '../../Context';
import "./CheckoutProduct.css";
function CheckoutProduct({id, title, img, price, rating}) {

    const { dispatch} = useStateValue();
    const removeFromBasket = ()=>{

        dispatch({
            type:"REMOVE_FROM_BASKET",
            id: id,
        })
    }
   
    return (
        <div className="CheckoutProduct">
                <img 
                    src={img}   
                    alt="" 
                    className="CheckoutProduct__img" />
            <div className="CheckoutProduct__info">
                <p className="CheckoutProduct__title"> {title}</p>
                <p className="CheckoutProduct__price">
                    <small>$</small>
                    <strong>{price} </strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map(i => <p>⭐</p>)}
                </div>
                    <button className="CheckoutProduct__button" onClick={removeFromBasket}>Remove from  basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;

