import styled from "styled-components";

export const ShoppingCart = styled.div`
    width: 240px;
    height: 400px;
    border-radius: 5%;
    margin-left: 10px;
    background-color: rgb(211, 211, 211);
    color: #000;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`

export const ShoppingCartItems = styled.div`
    margin-top: 15px;
    background-color: gray;
    width: 200px;
    height: 550px;
    overflow: auto;
    padding: 10px;
    box-shadow: 0px 0px 3px 1px black inset;
`