import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "redoxDev",
        email: "redoxDev@gmail.com"
    },
      
    reducers:{
        update: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
        },
    },
});


export const { update } = userSlice.actions;
export default userSlice.reducer;