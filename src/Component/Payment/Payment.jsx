import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../../Context";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import "./Payment.css";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import axios from "axios";
import dp from "firebase"
function Payment() {
  const { state, dispatch } = useStateValue();
  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disable, setDisable] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);
  const getBasketTotal = (basket) =>
    state.basket?.reduce((amount, item) => item.price + amount, 0);

  useEffect(() => {
    //    generate special stripe secret which allow us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(state.basket)*100}`
      });
      setClientSecret(response.data.clientSecret);
      console.log("response",response.data )
    };
    getClientSecret();
}, [state.basket]);

console.log(clientSecret);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent === paymentConfirmation || response.paymentIntent
       dp
       .collection("users")
       .doc(state.user?.uid)
       .doc('orders')
       .doc(paymentIntent.id)
       .set({
         basket : state.basket,
         amount:paymentIntent.amount,
         created:paymentIntent.created
       })
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch({
          type:'EMPTY_BASKET'
        })
        // replace not push in order to not go back to payment page
        history.replace("/orders");
      });
  };
  const handleChange = (e) => {
    // button will disabled when the event is empty
    setDisable(e.empty);
    setError(e.error ? e.error.message : "");
  };
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          {" "}
          Checkout(<Link to="/checkout">
            {state.basket?.length} items
          </Link>){" "}
        </h1>
        {/* delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery address</h3>
          </div>
          <div className="payment__address">
            <p>{state.user?.email}</p>
            <p>React lane 123</p>
            <p>los Angelos</p>
          </div>
        </div>
        {/* review items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3> View items and Delivery </h3>
          </div>
          <div className="payment__items">
            {state.basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                img={item.img}
                rating={item.rating}
                price={item.price}
              />
            ))}
          </div>
        </div>
        {/* payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3> Payment method </h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <p>
                        {`Subtotal ( ${state.basket?.length} items)`} :
                        <strong>{value}</strong>
                      </p>
                      <small className="subtotal__gift">
                        <input type="checkbox" /> This order contains a gift
                      </small>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(state.basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </div>
              <button disabled={processing || disable || succeeded}>
                <span>{processing ? <p>processing</p> : "Buy Now"}</span>
              </button>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
