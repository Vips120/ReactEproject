import React, {Component} from "react";
import {connect} from 'react-redux';
import {addQuantity,removeQuantity,removetoCart} from "../../../redux/action/products/product";
class Cart extends Component {

    constructor(props){
        super(props);
    }
   
 render(){
     if(this.props.loading){return <h1>LOADING....</h1>};
     if(this.props.cartItem.storedata.length > 0){
        return (
            <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-10 col-md-offset-1">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th className="text-center">Price</th>
                                <th className="text-center">Total</th>
                                <th> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                             this.props.cartItem.storedata.map(data => (
                                <tr key={data.products._id}>
                                <td className="col-sm-8 col-md-6">
                                <div className="media">
                                    <a className="thumbnail pull-left" href="#"> <img className="media-object" src={data.products.image} style={{width: '72px', height: '72px'}}/> </a>
                                    <div className="media-body">
                             <h4 className="media-heading"><a href="#">{data.products.title}</a></h4>
                             <h5 className="media-heading"> by <a href="#">{data.products.category}</a></h5>
                    
                                    </div>
                                </div></td>
                                <td className="col-sm-1 col-md-1" style={{textAlign: 'center'}}>
                                <i className="fa fa-chevron-circle-up" aria-hidden="true"
                                
                                onClick = {() => this.props.addQuantity(data.products)}
                                ></i>
                                <span>{data.quantity}</span>
                                <i className="fa fa-chevron-circle-down" aria-hidden="true"
                                onClick = {() => this.props.removeQuantity(data.products)}
                                ></i>
                                </td>
                             <td className="col-sm-1 col-md-1 text-center"><strong>${data.products.price}</strong></td>
                                <td className="col-sm-1 col-md-1 text-center"><strong>$
                                    {data.quantity * data.products.price}
                                    </strong></td>
                                <td className="col-sm-1 col-md-1">
                                <button type="button" className="btn btn-danger"
                                onClick={() => this.props.removetoCart(data.products._id)}
                                >
                                    <span className="glyphicon glyphicon-remove"
                                     
                                    ></span> Remove
                                </button></td>
                            </tr>
                             ))
                            }
                            <tr>
                                <td>   </td>
                                <td>   </td>
                                <td>   </td>
                                <td><h3>Total</h3></td>
                        <td className="text-right"><h3><strong>$ {this.props.total}</strong></h3></td>
                            </tr>
                            <tr>
                                <td>   </td>
                                <td>   </td>
                                <td>   </td>
                                <td>
                                <button type="button" className="btn btn-default"
                                onClick={() => this.props.history.push('/home')}
                                >
                                    <span className="glyphicon glyphicon-shopping-cart"></span> Continue Shopping
                                </button></td>
                                <td>
                                <button type="button" className="btn btn-success">
                                    Checkout <span className="glyphicon glyphicon-play"></span>
                                </button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
         )
     } else {
         return <h1>EMPTY CART!!!!!!</h1>
     }


 }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {loading: state.cart.loading,
          cartItem: state.cart,
          total: state.cart.storedata.reduce((accumlator, nextState) => (accumlator + nextState.products.price * nextState.quantity),0)
    }
}
export default connect(mapStateToProps,{addQuantity,removeQuantity,removetoCart})(Cart);