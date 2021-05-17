import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Home from "./Components/home"


function App() {
  return (
    <>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/profile" component={Profile} />
            <Route path="/home" component={Home}/>
          </Switch>
        </Router>
    </>
  );
}

export default App;
