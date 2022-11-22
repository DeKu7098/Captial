import "./App.css";
import { Switch,Route } from "react-router-dom";

import  SignUp  from "./SignUp";
import  SearchPage  from "./SearchPage";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/" exact>
        <SignUp />
        </Route>
        <Route path="/login" exact>
        <Login />
        </Route>
        <Route path="/search" exact>
          <SearchPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
