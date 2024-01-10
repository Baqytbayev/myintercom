import { configureStore } from "@reduxjs/toolkit"
import { postsSlice } from "./postsSlice"
import { useDispatch } from "react-redux"


const makeStore = () => {
    return configureStore({
        reducer: {
            users: postsSlice.reducer
        }
    })
}

export const store = makeStore()

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch