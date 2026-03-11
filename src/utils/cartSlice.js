import { createSlice,current } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            //Redux toolkit - we have to mutate the state
            state.items.push(action.payload)

            //in older version of redux-- we shouldn't mutate the state

            // const newState=[...state]
            // newState.item.push(action.payload)
            // return newState
        },
        removeItem:(state,action)=>{
            state.items.pop()
        },
        clearCart:(state,action)=>{
            console.log(state)//cannot read the state directly 
            console.log(current(state))//
            state.items.length=0

            // ** redux toolkit says either mutate the state or return the new state
            // return {items:[]}   empty cart
        }
        
    }
})

export const {addItem,removeItem,clearCart} =cartSlice.actions;
export default cartSlice.reducer;
//cartSlice is a object consists of
// {
//     actions:{}
//     reducer:{}
// }