import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: {
        items: [],
        itemsCount: 0
    },
    reducers: {
        // addItem: (state, action) => {
        //     if(state.items.hasOwnProperty(action.payload.id)) {
        //         state.items[action.payload.id][1]++;
        //     } else {
        //         state.items[action.payload.id] = [action.payload, 1];
        //     }
            
        //     state.itemsCount++;
        // },
        // removeItem: (state, action) => {
        //     state.items[action.payload.id][1]--;
        //     if(state.items[action.payload.id][1] == 0) {
        //         delete state.items[action.payload.id];
        //     }

        //     state.itemsCount--;
        // },
        // clearCart: (state) => {
        //     state.items.length = 0;
        // }
        addItem: (state,action)=>{
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (itemIndex !== -1) {
                state.items.splice(itemIndex, 1);
            }
        },
        clearItems: (state,action)=>{
            state.items=[];
        }
    }
});

export const {addItem, clearItems, removeItem} = cartSlice.actions;
export default cartSlice.reducer;
