import React from "react";
import "../Style/Nav-style.css"
import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";
const Nav=()=>{
 
  const { totalquantity } = useSelector((state) => state.CardsReducer);
return (
  <div className="my-nav">
    <div className="i-cart">
      <h4 style={{ color: "red", paddingTop: "23px" }}>ShopOnline</h4>
      <ul>
        <li>
          Cart
          <BsCart4 />
          {totalquantity}
        </li>
      </ul>
    </div>
  </div>
);
}
export default Nav;