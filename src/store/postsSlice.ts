import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postApi } from "../api/postApi";
import IUser from "../interface/iUser";
import IPost from "../interface/IPosts";


export const getUsers = createAsyncThunk(
    'getUsers',
    async() => {
        return await postApi.getUsers();
    }
)

export const getPostsById = createAsyncThunk(
    'getPostsById',
    async(id: number) => {
        return await postApi.getPostsById(id)
    }
)

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        users: [] as IUser[],
        loadingUsers: false,
        userMessage: 'Successfully loaded',
        posts: [] as IPost[]
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

        .addCase(getPostsById.rejected, (state) => {
            state.loadingUsers = false;
        })
        .addCase(getPostsById.pending, (state) => {
            state.loadingUsers = true;
        })
        .addCase(getPostsById.fulfilled, (state, action) => {
            state.loadingUsers = false;
            state.posts = action.payload
            state.userMessage = action.payload.message
        })
    },
})