import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from "./components/Sidebar/Sidebar"
// import Navbar from './components/Navbar/Navbar';
import "./app.scss"
import Home from './components/Home/Home';
import About from "./components/about/About"


function App() {
  return (
    <Router>
      <div className="mainPage">
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutme" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
