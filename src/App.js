import React from "react";
import './App.css'
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About"
import Service from "./components/Service";
import Portfolio from "./components/Portfolio";
import Contact from './components/Contact'
function App() {
  return (
    <BrowserRouter className="App">
      <Navbar/>
            <Switch>
                <Route path="/" exact component={Header}/>
                <Route path="/about" exact component={About}/>
                <Route path="/service" exact component={Service}/>
                <Route path="/portfolio" exact component={Portfolio}/>
                <Route path="/contact" exact component={Contact}/>
            </Switch>

        <Footer/>
    </BrowserRouter>
  );
}

export default App;
