import { createSelector } from "@reduxjs/toolkit";

export const selectPoketmonById = (poketmonId) => createSelector(
    state => state.poketmon.data,
    (poketmon) => poketmon.find(el => el.id === poketmonId)
)

export const selectPoketmonByRegExp = (reg) => createSelector(
    state => state.poketmon.data,
    (poketmon) => poketmon.filter(el => el.name.match(reg))
)

export const selectFavoritePoketmon = createSelector(
    state => state.poketmon.data,
    state => state.favorite,
    (poketmon, favorite) => {
        return poketmon.filter(el => favorite.includes(el.id))
    }
)