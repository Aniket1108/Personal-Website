import { BrowserRouter as Router, Route } from 'react-router-dom';
import Sidebar from "./components/Sidebar/Sidebar"
import Navbar from './components/Navbar/Navbar';
import "./app.scss"
import Home from './components/Home/Home';


function App() {
  return (
    <Router>
      <Sidebar/>
    </Router>
  );
}

export default App;
