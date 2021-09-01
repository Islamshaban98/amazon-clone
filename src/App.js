import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Checkout from "./Component/Checkout/Checkout";
import Login from "./Component/Login/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./Context";
import Payment from "./Component/Payment/Payment";
import {loadStripe} from '@stripe/stripe-js';
import { Elements} from '@stripe/react-stripe-js';
import Orders from "./Component/Orders/Orders";

const promise = loadStripe(
  'pk_test_51JT5lLGaiK4BHGFbI7Ol4YYsfY0e4mGVt3Y9aLMWUUbME9hzJEHXxzucJf9ckj2LFyL7V6lpcaZ0OcqafUlxJEk70055ij7Q3O'
  );
function App() {
  const {dispatch} = useStateValue();
  useEffect(() => {
    // listener when login and logout
    auth.onAuthStateChanged(authUser =>{
      console.log("the user is >>", authUser);

      if(authUser){
        // if the user just logged in/ the user was logged
        dispatch({
          type: 'SET_USER',
          user:authUser
        })
      }else{
        // if the user is logged out
        dispatch({
          type: 'SET_USER',
          user:null
        })
      }
    } )

  }, [])
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/signin">
            <Login/>
          </Route>
          <Route path="/orders">
          <Header/>
            <Orders/>
          </Route>
          <Route path="/checkout" exact>
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/payment" exact>
            <Header/>
            <Elements stripe={promise}>
            <Payment/>
            </Elements>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
