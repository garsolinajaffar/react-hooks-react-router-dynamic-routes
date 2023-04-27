import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MoviesPage from "./MoviesPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {/* render home page component here */}
        </Route>
        <Route path="/movies">
          <MoviesPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

