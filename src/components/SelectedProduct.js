import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BsPlusCircle } from "react-icons/bs";
import { FiMinusCircle } from "react-icons/fi";
const SelectedProducts = () => {
  const { id } = useParams();
 
  const { selectedproduct } = useSelector((state) => state.ProductsReducer);
  // console.log(product);
  const [quantity,setquantity]=useState(1);
 
    const dispatch=useDispatch();
    useEffect(()=>{
      dispatch({type:"Selected_Product",id:id})
    },[id])
  return (
    <div className="container-fluid my-4 ">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
          <img src={`${selectedproduct.pic}`} className="img-fluid py-3" />
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
          <h2>Description</h2>
          <p>{selectedproduct.desc}</p>
          <h4>PKR {selectedproduct.price}</h4>
          <div>
            <p>
              {" "}
              <BsPlusCircle onClick={() => setquantity(quantity + 1)} />{" "}
              {quantity}
              <span>
                <FiMinusCircle
                  onClick={() =>
                    setquantity(quantity > 1 ? quantity - 1 : quantity)
                  }
                />
              </span>{" "}
              <span>
                <button
                  onClick={() =>
                    dispatch({
                      type: "ADD_CART",
                      payload: { selectedproduct , quantity }
                    })
                  }
                  style={{ color: "orange" }}
                  className="btn "
                >
                  Add Cart
                </button>
              </span>
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};
export default SelectedProducts;
