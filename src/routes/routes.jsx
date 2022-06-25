import { Redirect, Route,Switch } from "react-router-dom";
import Login from "src/views/login/Login";

import Home from "src/views/home/Home";
const PublicRoute = ({ component, ...options }) => {
    const isAuth = false;
    if (!isAuth) return <Route {...options} component={component} />;
    return <Redirect to="/" />;
  };
  const Routes =()=>{
return(
<Switch>
   <PublicRoute exact path="/" component={Login}  />
   <PublicRoute exact path="/home" component={Home}  />
 </Switch>
)
  }
  export default Routes