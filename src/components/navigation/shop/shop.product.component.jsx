import React, {Component} from "react";
import {connect} from "react-redux";
import {productInfoById,addtoCart} from "../../../redux/action/products/product";
import {Card,Button,Badge} from "react-bootstrap";
class ShopProduct extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.productInfoById(this.props.match.params.id);
    }

 formatCurrency = (value) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'INR', currencyDisplay: 'narrowSymbol'}).format(value)
    };
 formatDescription = (value) => {
      if(!value){return null;}
    //   console.log(typeof value);
      return value;
  }

  addCart = (id) => {
    this.props.addtoCart(id);
    this.props.history.push('/cart');
  }

    render(){
        if(this.props.loading){return <h2>LOADING...</h2>};
        if(!this.props.productInfo){return null;}
        return(
            <div className="container mt-10 pt-20">
              <div className="row">
                  {
                     <div className="col-md-6" key={this.props.productInfo.products._id}>
                                           
<Card style={{ width: '18rem' ,marginTop:"20px"}}>
    <div className="text-center">
 
    <Card.Img variant="top" src={this.props.productInfo.products.image}  style={{width: '100px', height:'100px' }}/>
    </div>
  <Card.Body>
                <Card.Title>{this.props.productInfo.products.title}</Card.Title>
    <Card.Text>
     {this.formatDescription(this.props.productInfo.products.description)}
    </Card.Text>
    <Button variant="primary">
  Price <Badge variant="light">
  { this.formatCurrency(this.props.productInfo.products.price)}
  </Badge>
  <span className="sr-only">unread messages</span>
</Button>
    <Card.Text>
    
    </Card.Text>
    <Button variant="primary"
      onClick={() => this.addCart(this.props.productInfo.products._id)}
    >ADD CART</Button>
  </Card.Body>
</Card>
                     </div> 
                  }
                  </div>  
            </div>
        )
    }
} 

const mapStateToProps = (state) => {
     console.log(state.product.items);
    return {
        loading:state.product.loading,
        productInfo:state.product.items
}};

export default connect(mapStateToProps, {productInfoById,addtoCart})(ShopProduct);