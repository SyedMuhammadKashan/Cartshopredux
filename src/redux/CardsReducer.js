const istate={
productsarr_cart:[ ],
totalprice:0,
totalquantity:0

}

export const CardsReducer=(state=istate,action)=>{
 
    // console.log(selectedproduct)
    switch (action.type) {
      case "ADD_CART":
   const { selectedproduct, quantity } = action.payload;
      const check = state.productsarr_cart.find(el => el.id === selectedproduct.id);
       
        if (check) {
          return state;
        } else {
          const Tprice = state.totalprice + selectedproduct.price * quantity;
          const Tquantity = state.totalquantity + quantity;
          // selectedproduct.quantity = quantity;
          return {
            ...state,
            productsarr_cart: [...state.productsarr_cart, selectedproduct],
            totalprice: Tprice,
            totalquantity: Tquantity,
          };
        }
      default:
        return state;
    }
   
   
   
    
}