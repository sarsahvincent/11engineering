import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { Navbar, Nav, } from 'react-bootstrap';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Navigationbar() {
    let url = "https://www.linkedin.com/company/eleven-engineering-ltd"
    return (
        <Navbar collapseOnSelect className="navigationBar" expand="lg" variant="dark">
            <Navbar.Brand className="logo" href="/"><img style={{ width: "40px", height: "40px" }} src={logo} alt="Logo" /></Navbar.Brand>
            <Navbar.Brand className="logo text-warning btn-shine" href="/">ELEVEN ENGINEERING LTD</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                    <Link to="/" className='navlink m-2'>Home</Link>
                    <Link to="/about" className='navlink m-2'>About</Link>
                    <Link to="/services" className='navlink m-2'>Services</Link>
                    <a href={url}  target="_blank" className="text-white m-2 " rel="noreferrer"><LinkedInIcon /></a>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigationbar
