import { useContext } from 'react';
import UserContext from '../Providers/UserContext';
import { ShoppingItem as ShoppingItemStyled ,ColorPicture, ShoppingItemFirstcontainer, ShoppingItemFirstcontainerH2 , ShoppingItemSecondcontainer, ShoppingItemSecondcontainerH2, ShoppingItemFirstcontainerP, ShoppingItemSecondcontainerButton } from './ShoppingItem.style';
const ShoppingItem = (props) => {
    const {setUserCart} = useContext(UserContext);
    
    return (
        <ShoppingItemStyled>
            <ColorPicture color={props.item.name} />
            <ShoppingItemFirstcontainer>
                <ShoppingItemFirstcontainerH2>{props.item.name}</ShoppingItemFirstcontainerH2>
                <ShoppingItemFirstcontainerP>This is the {props.item.name} color, it's a awesome color that you should get in your house</ShoppingItemFirstcontainerP>
            </ShoppingItemFirstcontainer>
            <ShoppingItemSecondcontainer>
                <ShoppingItemSecondcontainerH2>${props.item.price}</ShoppingItemSecondcontainerH2>
                <ShoppingItemSecondcontainerButton onClick={()=>{
                    setUserCart((oldArray) => [...oldArray, props.item.id]);
                }}>Buy</ShoppingItemSecondcontainerButton>
            </ShoppingItemSecondcontainer>
        </ShoppingItemStyled>
    );
};

export default ShoppingItem;