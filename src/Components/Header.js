import React, { Component } from 'react'
import {Container, Navbar, Nav} from 'react-bootstrap'
export default class Header extends Component {
    render() {
        return (
            
                <div>
                   <Navbar bg="dark" variant ='dark' expand="lg" CollapseOnSelect>
                       <Container>
                            <Navbar.Brand href="/">Merchandize</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                            <Nav.Link href="/cart"><i class="fas fa-shopping-cart"></i>Cart</Nav.Link>
                            <Nav.Link href="/login"><i class="fas fa-user-alt"></i>SignIn</Nav.Link>
      
                            </Nav>
   
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                
            
        )
    }
}
