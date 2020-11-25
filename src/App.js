// import logo from './logo.svg';
import "./App.css";
import { Link } from "react-router-dom";

import Card from "./Components/Card";

import { HashRouter as Router, Route } from "react-router-dom";
import Blogform from "./Components/Blogform";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/card" component={Card} />

        <Route path="/form" component={Blogform} />
      </div>
    </Router>
  );
}

export default App;
