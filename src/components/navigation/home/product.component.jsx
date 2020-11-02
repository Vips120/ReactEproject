import React from "react";
import {Card, Button,Badge} from "react-bootstrap";

const Product = (props) => {
    
     let {datas} = props;
    //  console.log(datas);
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'INR', currencyDisplay: 'narrowSymbol'}).format(value)
    };
  const formatDescription = (value) => {
      if(!value){return null;}
    //   console.log(typeof value);
      return value.substring(1,60) + "....";
  }

    return(
      
                  
<Card style={{ width: '18rem' }}>
    <div className="text-center">
 
    <Card.Img variant="top" src={datas.image}  style={{width: '100px', height:'100px' }}/>
    </div>
  <Card.Body>
                <Card.Title>{datas.title}</Card.Title>
    <Card.Text>
     {formatDescription(datas.description)}
    </Card.Text>
    <Button variant="primary">
  Price <Badge variant="light">
  { formatCurrency(datas.price)}
  </Badge>
  <span className="sr-only">unread messages</span>
</Button>
    <Card.Text>
    
    </Card.Text>
    <Button variant="primary"
     onClick={() => props.history.push(`/shopproduct/${datas._id}`)}
    >Check Product</Button>
  </Card.Body>
</Card>
                
    )
}


export default Product;
