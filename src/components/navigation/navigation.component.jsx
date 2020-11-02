import React, {Component} from "react";
import {Navbar, Nav, Form, Button,FormControl} from "react-bootstrap";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {logout,UserLogged} from "../../redux/action/user/user";
import "./navigation.css";
import {navigateToCart} from "../../redux/action/products/product";

class Navigation extends Component {
  token = JSON.parse(localStorage.getItem("currentuser"));
  componentDidMount(){
    if(this.token){
      this.props.UserLogged();
    }

  }
    render(){
      console.log(this.props);
        return(
            <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">V-commerce</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
             
            </Nav>
            
            {
              this.props.loggeduser.currentuserdata
              ?

             <Nav inline="true">
                           <h2 className="text-white">Hello,{this.props.loggeduser.currentuserdata.user.username}</h2>
  <button type="button" className="btn btn-primary"
   onClick={() => this.props.navigateToCart()}
  >
  <i className="fa fa-cart-plus fa-2x" aria-hidden="true"></i> {
  this.props.cartData.storedata.length > 0 
    ?
    <span className="badge badge-light">
      {this.props.cartData.storedata.length}
    </span>
    :
    null
 }

  </button>

<Nav.Link onClick={() => this.props.logout()}
                 className="text-white" 
                 >
                   LOGOUT
                 </Nav.Link>
             </Nav>


                 
                 :
                 <Form inline>
                 <Nav.Link 
                  as={Link}
                 to="/signup"
                 >SignUp</Nav.Link>
                   <Nav.Link as={Link} to="/signin">SignIn</Nav.Link>
                 </Form>
            }
        
          </Navbar>
        
        )
    }
};

const mapStateToProps = (state) => {
  console.log(state);
  return {loggeduser: state.auth, cartData: state.cart}
}

export default connect(mapStateToProps,{logout,navigateToCart,UserLogged})(Navigation);