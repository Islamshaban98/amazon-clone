import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../../Context'
import "./Subtotal.css"
function Subtotal() {
    const {basket} = useStateValue().state;
    
    const getBasketTotal = (basket)=>basket?.reduce( (amount , item) => item.price + amount,0);
    
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                    <p>
                       { `Subtotal ( ${basket?.length} items)`} :<strong>{value}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox"/> This order contains a gift
                    </small>
                    </>
                    )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
