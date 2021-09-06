import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InputComponent from "./components/InputComponent";
import SearchComponent from "./components/searchComponent";

function App() {
  return (
    <div className="app-body">
      <Router>
        <Switch>
          <Route exact path="/">
            <InputComponent />
          </Route>
          <Route path="/search">
            <SearchComponent />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
