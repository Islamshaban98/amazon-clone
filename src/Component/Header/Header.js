import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon  from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../Context';
import { auth } from '../../firebase';
function Header() {
    
    const {state} = useStateValue();
    const handleAuth = ()=>{
        if(state.user){
            auth.signOut();
        }
    }
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
                    <Link to ={!state.user&&"/signin"}>
                <div className="header__option" onClick={handleAuth}>
                    {/* user?.email|| 'Guest */}
                    <span className="header__option-1">{state.user? `hello ${state.user.email}`:'Hello guest'}</span>
                    <span className="header__option-2">
                         {state.user? "Sign out": "Sign in"}
                    </span>
                </div>
                    </Link>
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
