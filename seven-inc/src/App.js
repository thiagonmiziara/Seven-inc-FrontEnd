import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CreateEmployee } from "./components/CreateEmployee";
import { EmployeeList } from "./components/EmployeeList";
import { EditEmployee } from "./components/EditEmployee";
import { Container, Navbar, NavItem, NavLink } from "reactstrap";

function App() {
  return (
    <div className="App">
      <Container className="themed-container" fluid={true}>
        <Router>
          <Navbar className="navbar-expand-lg bg-light ">
            <div className="flex">
              <img src="../../logo.jpg" alt="" />
              <h1>Seven Inc</h1>
            </div>

            <div className="d-flex justify-content-center mb-3">
              <ul className="navbar-nav">
                <NavItem className="flex">
                  <NavLink
                    href={"/CreateEmployee"}
                    className="nav-link text-light"
                  >
                    <span className="btn btn-outline-info">
                      Adicionar Funcionário
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem className="flex">
                  <NavLink
                    href={"/EmployeeList"}
                    className="nav-link text-light"
                  >
                    <span className="btn btn-outline-info">
                      Lista de Funcionário
                    </span>
                  </NavLink>
                </NavItem>
              </ul>
            </div>
          </Navbar>
          <br />

          <Switch>
            <Route exact path="/CreateEmployee" component={CreateEmployee} />
            <Route path="/EditEmployee/:id" component={EditEmployee} />
            <Route path="/EmployeeList" component={EmployeeList} />
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
