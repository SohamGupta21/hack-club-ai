import logo from './logo.svg';
import './App.css';
import Ai from './components/Ai'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/" exact component={() => <Ai />}></Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
