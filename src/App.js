import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Contacts from "./components/contacts/Contacts";

import Header from "./components/layout/Header";
import About from "./components/pages/About";

import { Provider } from "./context";

import "./App.css";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
import NotFound from "./components/pages/NotFound";
import Test from "./components/test/Test";
// REACT ROUTER
class App extends Component {
  state = {};
  render() {
    return (
      <Provider>
        <Router>
          <div className="AppClass">
            <Header branding="Contact Manager" />

            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/about/:id" component={About} />
                <Route exact path="/test" component={Test} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

// export default ;

// function App() {
//   return <div className="App">HELLO hahah here</div>;
// }

export default App;
