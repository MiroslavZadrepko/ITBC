import ProductForm from "./components/ProductForm";
import { getAllProducts } from "./service";
import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";



function App() {

  const [products, setProducts] = useState([])
 

  useEffect(()=>{
    getAllProducts().then(res => {
      setProducts(res.data)
    })
  },[])

  return (
    <div>
      <ProductForm products={products} setProducts={setProducts} />
      <hr/>
      <ProductList products={products} />

    </div>
  );
}

export default App;