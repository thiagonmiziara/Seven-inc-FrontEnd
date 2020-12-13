import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import{CreateEmployee} from './components/CreateEmployee';
import {EmployeeList} from './components/EmployeeList';
import{EditEmployee} from './components/EditEmployee';



function App() {
  return (
    <div className="App">
     <Router>
       <div className="container">
         <nav className="btn btn-warning navbar-expand-lg navheader">
           <div className="collapse navbar-collapse">
             <ul className="navbar-nav mr-auto">
               <li className="nav-item">
                 <Link to={'/CreateEmployee'} className="nav-link">Add Funcionario</Link>
               </li>
               <li className="nav-item">
                 <Link to={'/EmployeeList'} className="nav-link">lista Funcionario</Link>
               </li> 
             </ul>

           </div>
         </nav> <br/>
         <Switch>
           <Route exact path='/CreateEmployee' component={CreateEmployee}/>
           <Route  path='/EditEmployee' component={EditEmployee}/>
           <Route  path='/EmployeeList' component={EmployeeList}/>

         </Switch>
       </div>
     </Router>
    </div>
  );
}

export default App;
