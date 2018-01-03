//=========================================================================
// React
import React from "react";
// Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Pages
import Books from "./pages/Books";
import Detail from "./pages/Detail";
// Componenets
import Nav from "./components/Nav";
//=========================================================================

const App = () =>

  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Books} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={Detail} />
      </Switch>
    </div>
  </Router>;

export default App;
