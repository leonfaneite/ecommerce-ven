import React from "react"
import {Col,Row, Button, Card} from "react-bootstrap"
import {URL_BASE} from "../../utils/constants"

import "./Product.scss"


export default function Product(props){

    const {product} = props

    return (

<Col xs={3} className="product">
    <Card>
        <Card.Img variant="top" src={`${URL_BASE}/${product.image}`}/>
        <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.extraInfo}</Card.Text>
            <Card.Text>{product.price} $ / unidad</Card.Text>
            <Button>Añadir al Carrito</Button>
        </Card.Body>

    </Card>
</Col>

    )
}