import { createContext ,useEffect,useState} from "react";
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

useEffect(() => {
console.log("Cart Items Updated:", cartItems);
    // Initialize cart items from localStorage if available
},[cartItems]);


    const contextValue = {        // Define any state or functions you want to provide to the context
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart

    };
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
}
export default StoreConextProvide;