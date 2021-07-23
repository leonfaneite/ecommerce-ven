import React , {useState} from "react"
import logo from './logo.svg';
import useFetch from "./hooks/useFetch"
import {apiproductsJson} from "./utils/constants"
import { ToastContainer, toast } from 'react-toastify';
import Products from "./components/Products"
import TopMenu from "./components/TopMenu"
import {STORAGE_PRODUCTS_CAR} from "../src/utils/constants"

function App() {


  const products = useFetch(apiproductsJson,null)
  const [productsCart, setProductsCart] = useState([])

  const addProductCar = (id,name) =>{
    const idsProducts = productsCart
    idsProducts.push(id)
    setProductsCart(idsProducts)
    localStorage.setItem(STORAGE_PRODUCTS_CAR, productsCart)

    toast.success(`${name} añadido al carrito correctamente`)



  }
  

  
  return (
    <div >
<TopMenu></TopMenu>

<Products products={products} addProductCar ={addProductCar}/>
<ToastContainer
position="bottom-left"
autoClose={5000}
hideProgressBar
newestOnTop
closeOnClick={false}
rtl={false}
pauseOnvisibilityChange={false}
draggable
pauseOnHover={false}

>


</ToastContainer>
    </div>
  );
}

export default App;
