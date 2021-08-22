import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Checkout from "./Component/Checkout/Checkout";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
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
