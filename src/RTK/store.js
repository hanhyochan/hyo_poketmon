import { configureStore } from "@reduxjs/toolkit";
import { poketmonSlice, favoriteSlice } from "./slice";

export const store = configureStore({
    reducer: {
        poketmon: poketmonSlice.reducer,
        favorite: favoriteSlice.reducer
    }
})