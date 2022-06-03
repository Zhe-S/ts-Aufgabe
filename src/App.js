import React, {useState} from "react";
import Navbar from "./component/Navbar";
import "./App.css";
import Routes from "./component/Rout";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  /* const { productItems } = data; */
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item)=> item.id === product.id);
    if(ProductExist){
      setCartItems(cartItems.map((item)=> item.id === product.id ? 
      {...ProductExist, quantity: ProductExist.quantity +1}: item )
      );
      }else{
        setCartItems([...cartItems, {...product, quantity: 1}])
      
    }
  };
  return (
    <div>
      <Router>
        <Navbar cartItems={cartItems}/>
        <Routes /* productItems={productItems} */ cartItems={cartItems} handleAddProduct={handleAddProduct}/>
      </Router>
    </div>
  );
}

export default App;
