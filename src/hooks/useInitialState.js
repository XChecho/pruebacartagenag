import {useState} from "react";

const initialState = {
    cart: [],
    orderIsOpen: false,
};

const useInitialState = () => {

    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        if(!state.cart.includes(payload)){
            setState({
            ...state,
            cart: [...state.cart, payload],
            });
        }
    };

    const removeFromCart = (payload) => {
        setState({
        ...state,
        cart: state.cart.filter((items) => items.id !== payload.id),
        });
    };

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
    };
};

export default useInitialState;