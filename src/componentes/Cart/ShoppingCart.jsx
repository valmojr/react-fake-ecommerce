import {useContext} from 'react';
import UserContext from '../../Providers/UserContext';
import ShoppingCartItem from './ShoppingCartItem';
import CurrentCartValue from './CurrentCartValue';
import { ShoppingCart as ShoppingCartDiv } from './ShoppingCart.style';
import { ShoppingCartItems } from './ShoppingCart.style';

const ShoppingCart = () => {
    const {userCart} = useContext(UserContext);

    return (
        <ShoppingCartDiv>
            <ShoppingCartItems>
                {
                    userCart.map((itemId, index) => {
                        return (
                            <ShoppingCartItem key={index.toString()} itemId={itemId} />
                        );
                    })
                } 
            </ShoppingCartItems>
            <CurrentCartValue/>
        </ShoppingCartDiv>
    );
};

export default ShoppingCart;