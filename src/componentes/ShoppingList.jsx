import ShoppingItem from "./ShoppingItem";
import React from "react";
import { useContext } from "react";
import UserContext from "../Providers/UserContext";
import { ShoppingList as ShoppingListStyled } from "./ShoppingList.style";

const ShoppingList = () => {
    const {itemList} = useContext(UserContext);
    return (
    <ShoppingListStyled>
        {
            itemList.map((item, index) => {
                return (
                    <ShoppingItem key={index.toString()} item={item}/>
                );
            })
        }
    </ShoppingListStyled>
    );
};

export default ShoppingList;