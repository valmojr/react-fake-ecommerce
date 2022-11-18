import {useState} from "react";
import UserContext from "./UserContext";
import itemList from "../itemList";

export const UserProvider = (props) => {
    const [userCart, setUserCart] = useState([1,2,3]);
    const [user, setUser] = useState({
        id: 1,
        name: 'Usuário'
    });
    
    return (
        <UserContext.Provider value={{userCart, setUserCart, user, setUser, itemList}}>
            {props.children}
        </UserContext.Provider>
    );
};