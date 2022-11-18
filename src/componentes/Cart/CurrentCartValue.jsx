import { useContext } from "react";
import UserContext from "../../Providers/UserContext";

const CurrentCartValue = () => {
    const {userCart, itemList} = useContext(UserContext);
    const cartValue = () => {
        let value = 0;
        userCart.forEach(itemInCart => {
            let item = itemList.find(item => item.id === itemInCart);
            value += item.price;
        });
        return value;
    };
    return (
        <h2>Total: ${cartValue()}</h2>
    );
};
 export default CurrentCartValue;