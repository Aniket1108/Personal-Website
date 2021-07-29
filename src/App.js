import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from "./components/Sidebar/Sidebar"


function App() {
  return (
    <Router>
      <Switch>
        <Sidebar/>
      </Switch>
    </Router>
    
  );
}

export default App;
