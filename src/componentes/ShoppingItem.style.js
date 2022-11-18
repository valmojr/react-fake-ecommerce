import styled from "styled-components";

export const ColorPicture = styled.div`
    height: 100px;
    width: 100px;
    background-color: ${props => props.color};
`

export const ShoppingItem = styled.div`
    width: 340px;
    height: 100px;
    border-radius: 5%;
    margin-top: 15px;
    padding: 10px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    background-color: rgb(180, 180, 180);
`


export const ShoppingItemFirstcontainer = styled.div`
    width: 150px;
    display: flex;
    flex-flow: column nowrap;
    margin-top: -30px;
`

export const ShoppingItemFirstcontainerP = styled.p`
    font-size: 12px;
`

export const ShoppingItemFirstcontainerH2 = styled.h2`
    margin-bottom: -5px;
`

export const ShoppingItemSecondcontainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`

export const ShoppingItemSecondcontainerH2 = styled.h2`
    margin-top: 0px;
    margin-bottom: 2px;
`

export const ShoppingItemSecondcontainerButton = styled.button`
    width: 80px;
    height: 80px;
`