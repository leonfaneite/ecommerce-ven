import React from "react"
import "./TopMenu.scss"
import {Container, Nav, Navbar} from "react-bootstrap"
import {ReactComponent as Logo} from "../../assets/svg/logo.svg"


export default function TopMenu(){


return (

    <Navbar  bg="dark"  variant="dark"  className="top-menu" >

        <Container>

        <BrandNav/>
        <MenuNav/>

        </Container>

    </Navbar>


)}


function BrandNav(){

    return (

        <Navbar.Brand>

            <Logo/>
            <h2>La casa de los helado</h2>
        </Navbar.Brand>
    )
}



function MenuNav(){

    return (

        <Nav className="mr-auto">
            <Nav.Link href="#">Aperitivos</Nav.Link>
            <Nav.Link href="#">Helados</Nav.Link>
            <Nav.Link href="#">Tortas</Nav.Link>

        </Nav>

    )
}