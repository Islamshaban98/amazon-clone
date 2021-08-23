import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon  from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../Context';
function Header() {
    
    const {state} = useStateValue();
    return (
        <div className="header">
            <Link to="/">
           <img className="header__logo"
           src= "http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="logo" 
            />
            </Link>
            <div className="header__search">
                <input type="text" className="header__search-input" />
                <SearchIcon className="header__search-icon"/>
            </div>
            <div className="header header__nav">
                <div className="header__option">
                    <span className="header__option-1">Hello,guest</span>
                    <span className="header__option-2"> sign in</span>
                </div>
                <div className="header__option">
                    <span className="header__option-1">Return</span>
                    <span className="header__option-2">  orders</span>
                </div>
                <div className="header__option">
                    <span className="header__option-1">your</span>
                    <span className="header__option-2"> prim</span>
                </div>
                <Link to="/checkout">
                    <div className="header__option-basket">
                    <ShoppingBasketIcon/>
                    <span className="header__option-2 header__option-count"> {state?.basket.length} </span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Header
