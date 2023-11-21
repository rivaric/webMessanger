import { createSlice } from "@reduxjs/toolkit";

export const getConfig = () => ({
    baseURL: "",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
});

export type AppSliceState = {
    isLoading: boolean,
    user: {
        name: string | null,
        tag: string | null,
        img: File | null,
    }
}

const initialState: AppSliceState = {
    isLoading: false,
    user: {
        name: null,
        tag: null,
        img: null,
    }
}

export const AppSlice = createSlice({
    name: "App",
    initialState,
    reducers: {},
    extraReducers: {}
})

export default AppSlice.reducer;

