// export const initialState = {
//     basket:[]
// }

// const reducer = (state, action) =>{
//     // console.log(action)
//     switch(action.type){
//         case 'ADD_TO_BASKET':
//             return{
//                 ...state,
//                 basket:[...state.basket, action.payload]
//             };
//             case 'REMOVE_FROM_BASKET':
//                 const index = state.basket.findIndex(item => item.id !== action.id)
//                 let newBasket =[...state.basket];
//                 if(index >= 0){
//                    console.log("newBasket:", newBasket) 
//                 } else{
//                     console.log(`cant remove product (id: ${action.id})`)
//                 }
               
//         default:
//           return state;
//     }
    
// }
// export default reducer