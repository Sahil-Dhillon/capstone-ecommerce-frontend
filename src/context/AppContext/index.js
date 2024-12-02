import axios from "axios";
import React, { createContext, useState, useContext, useEffect } from "react";

// Create a Context for your data
const AppContext = createContext();

// Create a Provider component
const AppProvider = ({ children }) => {
    //   const [user, setUser] = useState(null);

    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [authToken,setAuthToken] = useState("");

    const updateUserData = async () => {
        setAuthToken(localStorage.getItem('authToken'));
        if (authToken) {
            try {
                // Make an API call to fetch user data using the token
                const response = await axios.get('/users/me', {
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                    },
                });
                setUserData(response.data); // Set the user data in context
            } catch (error) {
                console.error('Error fetching user data:', error);
                setUserData(null); // If there's an error, clear user data
            }
        } else {
            setUserData(null); // If no token is found, clear user data
        }
        setLoading(false); // Set loading to false after fetching
    };

    useEffect(() => {
        updateUserData();
    }, []);

    const [cart, setCart] = useState(() => {
        // Load from localStorage if available
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));

    }, [cart]);

    const addToCart = async (product) => {
        // Find if the product with the same productId and variation exists in the cart
        
        const existingProduct = cart.find(
            (item) => item.productId === product.productId && item.variations === product.variations
        );
    
        if (existingProduct) {
            // Update the quantity if the product with the same variation exists
            console.log("Existing")
            setCart(
                cart.map((item) =>
                    item.productId === product.productId && item.variations === product.variations
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            // Add new product with the variation
            setCart([...cart, { ...product, variations:product.variations, quantity: 1 }]);
        }
    };

    // const updateCart = (cart) =>{
    //     setCart(cart);


    // }
    
    const removeFromCart = (productId, variation) => {
        // Filter out the specific product with the productId and variation
        setCart(cart.filter((item) => item.productId !== productId || item.variations !== variation));
    };
    

    const clearCart = () => {
        setCart([]);
    };

    return (
        <AppContext.Provider value={{ userData,authToken, loading, updateUserData,cart,setCart, addToCart, removeFromCart, clearCart }}>

            {!loading && children}
        </AppContext.Provider>
    );
};

// Use the context in any component
// export const useAppContext = () => useContext(AppContext);
// export AppContext
export { AppContext, AppProvider };
