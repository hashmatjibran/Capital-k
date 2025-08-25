import { createContext ,useState} from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const StoreContext = createContext(null);

const StoreConextProvide = (props)=>{

    const[cartItems, setCartItems] = useState({}); // State to manage cart items

    const addToCart = (itemId) => {
        if(!cartItems[itemId]) {
            setCartItems(prevItems => ({ ...prevItems, [itemId]: 1 }));

        }
        else {
            setCartItems(prevItems => ({ ...prevItems, [itemId]: prevItems[itemId] + 1 }));
        }
    }
    const removeFromCart = (itemId) => {
            setCartItems((prev)=>({...prev, [itemId]: prev[itemId] - 1 }));
        
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item] > 0) 
            {
            let itemInfo = food_list.find((product) => product._id === item);
            totalAmount += itemInfo.price * cartItems[item];
            }
            
        }
        return totalAmount;
    }


    const contextValue = {        // Define any state or functions you want to provide to the context
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount

    };
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
}
export default StoreConextProvide;