import React, {Component} from "react";
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";
import {LoginUser} from "../../../redux/action/user/user";
class Signin extends Component{
   
    constructor(){
        super();
        this.state = {
            emailId:"",
            password:"",
            data:"",
            clearData:""
        };
        this.validator = new SimpleReactValidator({autoForceUpdate: this});
    }
// componentDidMount(){
//     this.alertMessage(this.props.register_token.item.message)
// }


    formhandlesubmit = (e) => {
       e.preventDefault();
       if(this.validator.allValid()){
           let item = {
               UserLogin:{
                 emailId: this.state.emailId,
                 password: this.state.password  
               }
           };
        //    console.log(item);
        this.props.LoginUser(item);
       } else {
           this.validator.showMessages();
           this.forceUpdate();
       }
    };

    inputDatahandle = (e) => {
       this.setState({[e.target.name]: e.target.value});
    };
   alertMessage = (data) => {
 this.setState({data: data});
   }

  render(){
    return(
        <div className="container p-4">
            {/* {
                 this.props.register_token ? 
            <h2 className="alert alert-success">{this.state.data}</h2>
            // <h2 className="alert alert-success">{}</h2>
                // this.alertMessage(this.props.register_token.item.message)
 : null

            } */}
            
            <div className="row">
            <div className="col-md-8">
               
            {
                    this.props.error ?
                    <h5 className="alert alert-danger">
                        {this.props.error.message}
                    </h5>
                    : ''
                }  
           <form onSubmit={this.formhandlesubmit}>
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
         <div className="text-right">
                 <Link to="/signup">register new user.</Link>
             </div>
<button type="submit"  className="btn btn-primary btn-lg btn-block"
 style={{marginTop:"20px"}}
>submit</button>
        
        </form>  
            
                
    </div>               
            </div>
        </div>
    )
}
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
         register_token: state.register_info,
        error:state.auth.message_error};
}
export default connect(mapStateToProps, {LoginUser})(Signin);