import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import{CreateEmployee} from './components/CreateEmployee';
import {EmployeeList} from './components/EmployeeList';
import{EditEmployee} from './components/EditEmployee';
import { Navbar, NavItem } from "reactstrap";



function App() {
  return (
    <div className="App">
     
     <Router>
       <div className="container">
         <Navbar className="btn btn-warning navbar-expand-lg navheader">
           <div className="collapse navbar-collapse">
             <ul className="navbar-nav">
               <NavItem >
                 <Link to={'/CreateEmployee'} className="nav-link"><h3>Adicionar Funcionário</h3></Link>
               </NavItem>
               <NavItem>
                 <Link to={'/EmployeeList'} className="nav-link"><h3>Lista de Funcionário</h3></Link>
               </NavItem> 
             </ul>

           </div>
         </Navbar> <br/>
         <Switch>
           <Route exact path='/CreateEmployee' component={CreateEmployee}/>
           <Route  path='/EditEmployee/:id' component={EditEmployee}/>
           <Route  path='/EmployeeList' component={EmployeeList}/>

         </Switch>
       </div>
     </Router>
     
    </div>
  );
}

export default App;
