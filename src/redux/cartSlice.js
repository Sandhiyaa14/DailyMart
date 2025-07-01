import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name : "cart",
    initialState:{
        cart:JSON.parse(localStorage.getItem("cart")) || []
    },
    reducers:{
        setCart:(state,action)=>{
            state.cart = action.payload
            localStorage.setItem("cart",JSON.stringify(state.cart))
        },
       
    }
})

export const {setCart} = cartSlice.actions;
export default cartSlice.reducer;