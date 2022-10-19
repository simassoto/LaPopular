import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

import Home from "./pages/Home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/"  element ={<Home/>}/>
          <Route path="/menu"  element ={<Menu/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
