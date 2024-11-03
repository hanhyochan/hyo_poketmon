import { createSlice } from "@reduxjs/toolkit";
import { fetchMultiplePoketmonById } from "./thunk"

export const poketmonSlice = createSlice({
    name: 'poketmon',
    initialState: {
        data: [],
        loading: true,
    },
    reducers: {}, //동기적 상태변경
    extraReducers: (builder) => {
        builder.addCase(fetchMultiplePoketmonById.pending, (state) => {
            state.loading = true
        }).addCase(fetchMultiplePoketmonById.rejected, (state) => {
            state.loading = false
        }).addCase(fetchMultiplePoketmonById.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
    } // 비동기적 상태변경
})