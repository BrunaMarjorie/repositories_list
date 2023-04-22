import React from "react";
import { Link } from "react-router-dom";
import { MdShoppingBasket } from "react-icons/md";

import { Container, Cart, Logo } from "./styles";
import logo from "../../assets/images/logo2.png";


export default function Header() {
    return (
    <Container>
        <Link to="/">
            <Logo src={logo} alt="Book Shop"/>
        </Link>

        <Cart>
            <div>
                <strong>My Cart</strong>
                <span>3 items</span>

            </div>
            <MdShoppingBasket size={36} color="#FFF"/>
        </Cart>
    </Container>)
}