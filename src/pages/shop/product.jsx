import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage,remaining, } = props.data;
  const { addToCart, cartItems} = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product container-fluid">
      <img src={productImage} alt='product'/>
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
        <p className="remaining" >  Remaining Items :{remaining}</p>
        <form action="/action_page.php">
        
        </form> 
        
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <>
       
         ({cartItemCount})</>}
      </button>


   
    </div>  
  );
};
