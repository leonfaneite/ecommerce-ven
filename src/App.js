import logo from './logo.svg';

import useFetch from "./hooks/useFetch"

import {apiproductsJson} from "./utils/constants"

import { ToastContainer, toast } from 'react-toastify';

import Products from "./components/Products"

import TopMenu from "./components/TopMenu"

function App() {


  const products = useFetch(apiproductsJson,null)
  
  
  return (
    <div >
<TopMenu></TopMenu>

<Products products={products}/>
    </div>
  );
}

export default App;
