import React from "react"
import {Col, Row , Container} from "react-bootstrap"
import Loading from "../../components/Loading"
import Product from "../Product"



import "./Products.scss"


export default function Products (props){

    const {products: {loading, result , error} , addProductCar} = props


    return (

        <Container>

            <Row>
                {loading || !result ? <Loading/> :
                
                result.map((product,index) => <Product key ={index} product ={product}  addProductCar={addProductCar}/>)
                
                } 

            </Row>
        </Container>


    )


}