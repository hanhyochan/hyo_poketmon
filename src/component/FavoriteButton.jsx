import { useDispatch, useSelector } from "react-redux"
import { favoriteSlice } from "../RTK/slice"

export default function FavoriteButton({ poketmonId }) {
    const isFavorite = useSelector(state => state.favorite.some((item) => (item === poketmonId)))
    const dispatch = useDispatch()

    return (
        <button onClick={(e) => {
            e.stopPropagation()
            dispatch(isFavorite ? favoriteSlice.actions.removeFromFavorite({ poketmonId }) : favoriteSlice.actions.addToFavorite({ poketmonId }))
        }} className={isFavorite ? "text-[red]" : ''}>
            {isFavorite ? '♥' : '♡'}
        </button >
    )
}