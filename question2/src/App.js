import "./App.css";
import Navigation from "./components/Navigation";
import Signin from "./components/Signin";
import Home from "./components/Home";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Route path="./" exact component={Home} />
        <Route path="./signin" exact Component={Signin} />
      </BrowserRouter>
    </div>
  );
}

export default App;
