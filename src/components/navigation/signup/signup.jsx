import React, {Component} from "react";
import SimpleReactValidator from "simple-react-validator";
import {connect} from "react-redux";
import {UserRegister} from "../../../redux/action/user/user";
import "./signup.css";
class Signup extends Component {
    constructor(){
        super();
        this.state = {
            username:"",
            userId:"",
            emailId:"",
            password:""
        };
        this.validator = new SimpleReactValidator({autoForceUpdate: this});
    }

    formhandlesubmit = (e) => {
       e.preventDefault();
       if(this.validator.allValid()){
           let item = {
               username: this.state.username,
               userId: this.state.userId,
               UserLogin:{
                 emailId: this.state.emailId,
                 password: this.state.password  
               }
           };
        //    console.log(item);
        this.props.UserRegister(item);
       } else {
           this.validator.showMessages();
           this.forceUpdate();
       }
    };

    inputDatahandle = (e) => {
       this.setState({[e.target.name]: e.target.value});
    };

    render(){
        return(
            <div className="container p-4">
                <div className="row">
                <div className="col-md-8">
               <form onSubmit={this.formhandlesubmit}>
             <div className="form-group">
                 <input type="text" placeholder="enter username" 
                   name="username"
                   className="form-control"
                   value={this.state.username}
                   onChange={this.inputDatahandle}
                 />
                 {this.validator.message("username", this.state.username, "required")}
             </div>
             <div className="form-group">
                 <input type="text" placeholder="enter userId" 
                   name="userId"
                   className="form-control"
                   value={this.state.userId}
                   onChange={this.inputDatahandle}
                 />
                    {this.validator.message("userId", this.state.userId, "required")}
             </div>
             <div className="form-group">
                 <input type="email" placeholder="enter emailId" 
                   name="emailId"
                   className="form-control"
                   value={this.state.emailId}
                   onChange={this.inputDatahandle}
                 />
                    {this.validator.message("emailId", this.state.emailId, "required")}
             </div>
             <div className="form-group">
                 <input type="password" placeholder="enter password" 
                   name="password"
                   className="form-control"
                   value={this.state.password}
                   onChange={this.inputDatahandle}
                 />
                    {this.validator.message("password", this.state.password, "required")}
             </div>
<button type="submit"  className="btn btn-primary btn-lg btn-block">submit</button>
            
            </form>            
                    
        </div>               
                </div>
            </div>
        )
    }
}
 
const mapStateToProps = (state) => {
    console.log(state);
    return state;
}

export default connect(mapStateToProps, {UserRegister})(Signup);