import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px 0;
    background-color: "eee";
`;

export const Cart = styled(Link)``;

export const Logo = styled.img`
    width: 200px;
    height: 200px;
`;