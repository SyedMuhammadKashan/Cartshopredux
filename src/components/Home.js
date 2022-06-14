import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const { products } = useSelector((state) => state.ProductsReducer);
  //  console.log(products);
         return(
           <React.Fragment>
             <div className="container">
             <div className="row">
             {
                 products.map((products)=>{
                   return (
                     <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3">
                       <div className="card " >
                         <Link to={`/SelectedProduct/${products.id}`}>
                       
                           <img
                             src={products.pic}
                             className="card-img-top img-fluid" 
                             alt={products.name}
                           />
                         </Link>
                         <div className="card-body">
                           <h5 className="card-title">{products.name}</h5>
                           <p className="card-text">PKR {products.price}</p>
                         </div>
                       </div>
                     </div>
                   );
                 })
                 
             }
             </div>
             </div>
           </React.Fragment>
         )

  
};
export default Home;
