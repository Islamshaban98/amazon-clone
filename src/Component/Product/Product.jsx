import React from 'react'
import "./Product.css";
function Product({id, title, img, price, rating}) {
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
                    <button className="product__button">Add to basket</button>
            </div>
        </div>
    )
}

export default Product

