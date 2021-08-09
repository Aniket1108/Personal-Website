import React, {useState} from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from "./components/Sidebar/Sidebar"
// import Navbar from './components/Navbar/Navbar';
import "./app.scss"
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';


function App() {


  const [showSidebar, setShowSidebar] = useState(false)


  return (
    <Router>
      <div className="mainPage">
        <button className="sidebar-toggle" onClick={() => setShowSidebar(!showSidebar)}>
          <div className="toggle-bars"></div>
          <div className="toggle-bars"></div>
          <div className="toggle-bars"></div>
        </button>
        
        <Sidebar show={showSidebar} /> 


        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/resume" component={Resume} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
