import React, {Component} from "react";
import {connect} from "react-redux";
import {productInfo} from "../../../redux/action/products/product";
import Product from "./product.component";

class Home extends Component {
    componentDidMount(){
        this.props.productInfo();
    }
    render(){
       if(this.props.loading){return <h1>LOADING....</h1>}
       if(!this.props.items){return null;}
       return(
           <div className="container">
               <h2>all products</h2>
               <div className="row">
             
               {
        this.props.items.products.map((item) => (
            <div className="col-md-4 mt-3"  style={{display: 'flex'}} key={item._id}>
        <Product datas={item} {...this.props} />
        </div>
        ))
               }
           
    
    </div>
    </div>
       )
}}

const mapStateToProps = (state) => {
    console.log(state);
    return {items:state.products.items,
            loading: state.products.loading
    };
}

export default connect(mapStateToProps, {productInfo})(Home);