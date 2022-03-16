import "./App.css";
import Navigation from "./components/Navigation";
import Signin from "./components/Signin";
import Home from "./components/Home";
import { BrowserRouter, Route, Navigate } from "react-router-dom";

function PrivateRoute({ user, component, path }) {
  if (!user) {
    return <Navigate to="/signin" replace />;
  }
  return <Route path={path} component={component} />;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        {/* <PrivateRoute user="" component={Home} path="./"/> */}
        {/* <Route path="./" exact component={Home} /> */}
        <Route path="./signin" exact Component={Signin} />
      </BrowserRouter>
    </div>
  );
}

export default App;
