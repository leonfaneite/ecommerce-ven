import React from "react"
import {Spinner} from "react-bootstrap"

import "./Loading.scss"


export default function Loading (){


    return(
        <div calssName="loading">
        <Spinner animation="border" role="status"/>
        <h5>Cargando...</h5>
        </div>
    )
}