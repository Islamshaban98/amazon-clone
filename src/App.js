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
          <Route path="/checkout" exact>
            <Header/>
            <Checkout/>
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
