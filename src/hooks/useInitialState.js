import {useState} from "react";

const initialState = {
    cart: [],
    orderIsOpen: false,
};

const useInitialState = () => {

    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        if(!state.cart.includes(payload)){
            payload.quantity = 1
            setState({
            ...state,
            cart: [...state.cart, payload],
            });
        }else{
            payload.quantity = payload.quantity + 1 
        }
    };

    const addItem = (productId) => {
        const item = state.cart.find(element => element.id === productId)
        item.quantity = item.quantity + 1
        setState({
            ...state,
            cart: [...state.cart],
        });  
    };

    const removeItem = (productId) => {
        const item = state.cart.find(element => element.id === productId)
        item.quantity = item.quantity - 1
        setState({
            ...state,
            cart: [...state.cart],
        });
        if(!item.quantity) removeFromCart(item)
    };

    const removeFromCart = (payload) => {
        setState({
        ...state,
        cart: state.cart.filter((items) => items.id !== payload.id),
        });
    };

    const removeAllCart = () => {
        setState({
            ...state, cart:[]
        });
    }

    const toggleOrder = () => {
        setState({
        ...state,
        orderIsOpen: !state.orderIsOpen,
        });
    };

    return {
        state,
        addToCart,
        removeFromCart,
        toggleOrder,
        addItem,
        removeItem,
        removeAllCart
    };
};

export default useInitialState;