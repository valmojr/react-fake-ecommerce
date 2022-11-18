import styled from "styled-components";

export const ColorPicture = styled.div`
    height: 80px;
    width: 80px;
    background-color: ${props => props.color || 'grey'};
`

export const ShoppingCartItemDiv = styled.div`
    display: flex;
    flex-flow: row nowrap;
    margin-top: 5px;
    margin-bottom: 15px;
    height: 80px;
    padding: 10px;
    background-color: rgb(216, 216, 216);
    box-shadow: 0px 0px 3px 3px rgb(85, 85, 85);
`

export const ShoppingCartItemContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    height: 100px;
    margin-left: 20px;
`
export const ShoppingCartItemContainerH3 = styled.h3`
    margin-top: 0px;
`

export const ShoppingCartItemContainerH4 = styled.h4`
    margin-top: -30px;
    font-size: 16px;
`
export const ShoppingCartItemContainerButton = styled.button`
    margin-top: -22px;
`