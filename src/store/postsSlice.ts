import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postApi } from "../api/postApi";
import IUser from "../interface/iUser";


export const getUsers = createAsyncThunk(
    'getUsers',
    async() => {
        return await postApi.getUsers();
    }
)

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        users: [] as IUser[],
        loadingUsers: false,
        userMessage: 'Successfully loaded'
    },
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(getUsers.rejected, (state) => {
            state.loadingUsers = false;
        })
        .addCase(getUsers.pending, (state) => {
            state.loadingUsers = true;
        })
        .addCase(getUsers.fulfilled, (state, action) => {
            state.loadingUsers = false;
            state.users = action.payload
            state.userMessage = action.payload.message
        })
    },
})