import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../HutchMeyer.png';
import styled from 'styled-components';
import {ButtonContainer} from "./Buttons";

export default class Navbar extends Component {
    render() {
        return (
           <NavWrapper className="navbar grey navbar-expand-sm navbar-dark px-sm-5">
               <Link to='/'>
<img src={logo} alt='home' className="navbar-brand" height="75px"></img>
               </Link>
            
<Link to="/details" className="ml-auto">
    <ButtonContainer>
        <span className="mr-2">
        <i className="fas fa-book"></i>
        </span>
        learn more
    </ButtonContainer>
</Link>
           </NavWrapper>
        );
    }
}
const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
    color:var(--mainWhite)!important;
    font-size:1.3rem;
    text-transform: capitalize;
}
`