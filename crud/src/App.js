import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CreateEmployee } from "./components/CreateEmployee";
import { EmployeeList } from "./components/EmployeeList";
import { EditEmployee } from "./components/EditEmployee";
import { Navbar, NavItem, NavLink } from "reactstrap";

function App() {
  return (
    <div className="App">
      
      <Router>
        <div className="container">
         <Switch>
            <Route exact path="/CreateEmployee" component={CreateEmployee} />{" "}
            <Route path="/EditEmployee/:id" component={EditEmployee} />{" "}
            <Route path="/EmployeeList" component={EmployeeList} />
          </Switch>
          <Navbar className="navbar-expand-lg  ">
            <div className="d-flex justify-content-center mb-3">
              <ul className="navbar-nav">
                <NavItem>
                  <NavLink
                    href={"/CreateEmployee"}
                    className="nav-link text-light"
                  >
                    <span className="btn btn-outline-info"> Adicionar Funcionário </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href={"/EmployeeList"}
                    className="nav-link text-light"
                  >
                    <span className="btn btn-outline-info"> Lista de Funcionário </span>
                  </NavLink>
                </NavItem>
              </ul>
            </div>
          </Navbar>
          <br />
         
        </div>
      </Router>
    </div>
  );
}

export default App;
