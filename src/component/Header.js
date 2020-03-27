import React, { Fragment, useState } from 'react';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   Container
// } from 'reactstrap';
import {Link} from 'react-router-dom'
class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isOpen: false
        }
    }
    
    render(){
        return(
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <a className="navbar-brand" >Admin Manager</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item active">

                        <Link  to="/listAnswer" className="nav-link">Answer</Link>
                      </li>
                      <li className="nav-item active">
                      <Link  to="/listword" className="nav-link">Word</Link>
                      </li>
               
                     
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                  </div>
               </nav>

            
        )
    }
}

export default Header