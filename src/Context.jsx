import React, {  useReducer, createContext, useContext } from 'react';

const StateContext = createContext();
export const initialState = {
    basket:[],
    user:null
}

const reducer = (state, action) =>{
    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket:[...state.basket, action.payload]
            }
        case 'REMOVE_FROM_BASKET':
                const index = state.basket.findIndex(
                    (item) => item.id !== action.id
                    );
                let newBasket = [...state.basket];
                
                // if(index > -1){
                   newBasket.splice(index, 1);
                // } 
                // else{
                //     console.log(`cant remove product (id: ${action.id})`)
                // }
                return{
                    ...state,
                    basket: newBasket
                }
        case 'SET_USER':
            return{
                ...state,
                user:action.user
            }
            
        default:
          return state;
    }
    
}
export const StateProvider = ({children})=>{

    const [state, dispatch] = useReducer(reducer, initialState);

    return <StateContext.Provider value={{state, dispatch}}>
        {children}
    </StateContext.Provider>
}

export const useStateValue = () => useContext(StateContext);