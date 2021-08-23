import React from 'react'
import { useStateValue } from '../../Context';
import "./Product.css";
function Product({id, title, img, price, rating}) {
    const { dispatch} = useStateValue();
    // dispatch the product  item in to context (data layer)
    const addToBasket = ()=>{
        dispatch({
            type:"ADD_TO_BASKET",
            payload:{
                id:id,
                title:title,
                img:img,
                price:price,
                rating:rating
            }
        })
    }
    return (
        <div className="product">
            <div className="product__info">
                <p> {title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price} </strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map(i => <p>⭐</p>)}
                </div>
                <img 
                    src={img}   alt="" 
                    className="product__img" />
                    <button className="product__button" onClick={addToBasket}>Add to basket</button>
            </div>
        </div>
    )
}

export default Product

