import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: null,
    name: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.name = action.payload.name;
        },
        removeUser(state) {
            state.email = null;
            state.name = null;
        },
    },
})

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;