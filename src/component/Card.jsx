import { useNavigate } from "react-router-dom"
import { useState, useMemo, memo } from "react"
import styled from "styled-components"
import FavoriteButton from "./FavoriteButton"

const CardContainer = styled.section`
    width: 150px;
    border: 1px solid gray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding-bottom: 10px;
    border-radius: 10px;
    border-bottom: 5px solid black;
    border-right: 5px solid black;
`
export const Card = memo(({ poketmon }) => {
    console.log("card", poketmon.id)
    const [isImageLoading, setIsImageLoading] = useState(true)
    const navigate = useNavigate()
    return (
        <CardContainer onClick={() => navigate(`/detail/${poketmon.id}`)}>
            {isImageLoading ? <div className="w-[120px] h-[120px] leading-[120px]">loading...</div> : null}
            <img onLoad={() => setIsImageLoading(false)} src={poketmon.front} style={{ display: isImageLoading ? 'none' : 'block' }} />
            <div>{poketmon.name} <FavoriteButton poketmonId={poketmon.id} /></div>
        </CardContainer>
    )
})