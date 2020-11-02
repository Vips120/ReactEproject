export const cartUtility = (oldstate,nextaction) => {
     const existingcartItem = oldstate.find(data => data.products._id === nextaction.products._id);
     if(existingcartItem){
         return oldstate.map(cartItem => {
           return    cartItem.products._id === nextaction.products._id
               ?
              {...cartItem, quantity: cartItem.quantity + 1}
              : cartItem;
         })
     } else{
         return [...oldstate, {...nextaction, quantity: 1}]; 
     }
};

export const addQuntityUtilty = (oldstate, updatestate) => {
    const existingcartItem = oldstate.find(data => data.products._id === updatestate._id);
    if(existingcartItem){
      return   existingcartItem.quantity +=1;
    } else {
        return [...oldstate];
    }
}


export const removeQuntityUtilty = (oldstate, removestate) => {
    const existingcartItem = oldstate.find(data => data.products._id === removestate._id);
    if(existingcartItem.quantity === 1){
   return oldstate.filter(data => data.products._id !== removestate._id);
    } else {
        existingcartItem.quantity -= 1;
        return [...oldstate];
    }
}
