import React, {Component} from "react";
import {Navbar, Nav, Form, Button,FormControl} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./navigation.css";
class Navigation extends Component {
    render(){
        return(
            <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">V-commerce</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
             
            </Nav>
            <Form inline>
            <Nav.Link 
             as={Link}
            to="/signup">SignUp</Nav.Link>
              <Nav.Link href="#pricing">SignIn</Nav.Link>
            </Form>
          </Navbar>
        
        )
    }
}

export default Navigation;