import { useContext } from 'react';
import UserContext from '../../Providers/UserContext';
import { ColorPicture, ShoppingCartItemContainer, ShoppingCartItemDiv, ShoppingCartItemContainerH3, ShoppingCartItemContainerButton } from './ShoppingCartItem.style';

const ShoppingCartItem = (props) => {
    const {itemList, userCart, setUserCart} = useContext(UserContext);
    
    const item = itemList.find(itemFromList => itemFromList.id === props.itemId);
    
    const returnWithoutElement = (array, id) => {
        let i = array.indexOf(id);
        if (i !== -1) {
            delete array[i];
        }
        return array.filter(item => item !== undefined);
    }

    return (
        <ShoppingCartItemDiv>
            <ColorPicture color ={item.name}/>
            <ShoppingCartItemContainer>
                <ShoppingCartItemContainerH3>{item.name}</ShoppingCartItemContainerH3>
                <ShoppingCartItemContainerButton onClick={()=>{
                    setUserCart(returnWithoutElement(userCart,props.itemId));
                }}>Remove</ShoppingCartItemContainerButton>
            </ShoppingCartItemContainer>
        </ShoppingCartItemDiv>
    );
}

export default ShoppingCartItem;